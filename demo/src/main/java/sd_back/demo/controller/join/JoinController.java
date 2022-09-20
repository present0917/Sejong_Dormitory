package sd_back.demo.controller.join;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import sd_back.demo.domain.Member;
import sd_back.demo.service.MemberService;
import javax.validation.Valid;

@Slf4j
@Controller
@RequiredArgsConstructor
public class JoinController {

    private final MemberService memberService;
    //private final JpaMemberRepository jpaMemberRepository;

    @GetMapping("/join")
    public String joinForm(@ModelAttribute("joinForm") joinForm form) {
        return "join/joinForm";
    }

//    @PostMapping("/join")
    public String join(@Valid @ModelAttribute joinForm form, BindingResult bindingResult) {

        if (bindingResult.hasErrors()) {
            return "join/joinForm";
        }

        Member joinMember = new Member(form.getStudentId(), form.getName(), form.getPassword());

        memberService.join(joinMember.getStudentId(), joinMember.getName(), joinMember.getPassword());

        return "join/joinSuccessForm";
    }

    //@PostMapping("/join")
    public String joinVer2(@Valid @ModelAttribute joinForm form, BindingResult bindingResult) { //jpa 사용함

        if (bindingResult.hasErrors()) {
            return "join/joinForm";
        }

        //Member joinMember = new Member(form.getStudentId(), form.getName(), form.getPassword());

        memberService.join(form.getStudentId(), form.getName(), form.getPassword());

        return "join/joinSuccessForm";

    }

    @ResponseBody
    @PostMapping("/join")
    public ResponseEntity joinVer3(@Valid @RequestBody joinForm form, BindingResult bindingResult) { //jpa 사용함

        if (bindingResult.hasErrors()) {
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }
        //Member joinMember = new Member(form.getStudentId(), form.getName(), form.getPassword());
        //jpaMemberRepository.save(joinMember);

        //Optional<Member> joinMember = Optional.ofNullable(memberService.join(form.getStudentId(), form.getName(), form.getPassword()));
        Member joinMember = memberService.join(form.getStudentId(), form.getName(), form.getPassword());

        if (joinMember==null) { //회원가입 실패 (학번 중복됨)
            bindingResult.reject("joinFail", "이미 존재하는 학번입니다.");

            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }


        return new ResponseEntity(HttpStatus.OK);

    }
}
