package sd_back.demo.controller.login;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import sd_back.demo.domain.Member;
import sd_back.demo.service.MemberService;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

@Slf4j
@Controller
//@RestController
@RequiredArgsConstructor
public class LoginController {

    private final MemberService memberService;
    //private final JpaMemberRepository jpaMemberRepository;

    @GetMapping("/login")
    public String loginForm(@ModelAttribute("loginForm") LoginForm form) {
        return "login/loginForm";
    }

    //@PostMapping("/login")
    public String login(@Valid @ModelAttribute LoginForm form, BindingResult bindingResult, HttpServletResponse response) {

        if (bindingResult.hasErrors()) {
            return "login/loginForm";
        }

        Member loginMember = memberService.login(form.getLoginId(), form.getPassword());

        if (loginMember == null) { //로그인 실패
            bindingResult.reject("loginFail", "아이디/비밀번호가 맞지 않습니다.");
            log.debug("아이디/비밀번호 틀림");
            return "login/loginForm";
        }
        log.debug(""+loginMember.getStudentId());

        //로그인 성공
        Cookie idCookie = new Cookie("memberId", String.valueOf(loginMember.getId()));
        response.addCookie(idCookie);

        //화면이 안넘어가는 오류 해결해야함!
        return "login/loginSuccessForm";
    }

    //@PostMapping("/login")
    public String loginVer2(@Valid @ModelAttribute LoginForm form, BindingResult bindingResult, HttpServletResponse response) {

        if (bindingResult.hasErrors()) {
            return "login/loginForm";
        }

        Member loginMember = memberService.login(form.getLoginId(), form.getPassword());

        if (loginMember == null) { //로그인 실패
            bindingResult.reject("loginFail", "아이디/비밀번호가 맞지 않습니다.");
            log.debug("아이디/비밀번호 틀림");
            return "login/loginForm";
        }
        log.debug(""+loginMember.getStudentId());

        //로그인 성공
        Cookie idCookie = new Cookie("memberId", String.valueOf(loginMember.getId()));
        response.addCookie(idCookie);

        //화면이 안넘어가는 오류 해결해야함!
        return "login/loginSuccessForm";
    }

    @ResponseBody
    @PostMapping("/login")
    public ResponseEntity loginVer3(@Valid @RequestBody LoginForm form, BindingResult bindingResult, HttpServletResponse response) {

        log.info("form.getLoginID: "+ form.getLoginId());
        log.info("form.getPassword: "+ form.getPassword());

        if (bindingResult.hasErrors()) {
            //return "login/loginForm";
            return new ResponseEntity(HttpStatus.BAD_REQUEST);

        }

        Member loginMember = memberService.login(form.getLoginId(), form.getPassword());

        if (loginMember == null) { //로그인 실패
            bindingResult.reject("loginFail", "아이디/비밀번호가 맞지 않습니다.");
            log.debug("아이디/비밀번호 틀림");
            //return "login/loginForm";
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }
        log.debug(""+loginMember.getStudentId());

        //로그인 성공
        Cookie idCookie = new Cookie("memberId", String.valueOf(loginMember.getId()));
        response.addCookie(idCookie);

        //return 200;
        return new ResponseEntity(HttpStatus.OK);
    }
}
