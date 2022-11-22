package sd_back.demo.controller.notice;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import sd_back.demo.domain.Notice;
import sd_back.demo.service.MemberService;
import sd_back.demo.service.NoticeService;

import javax.validation.Valid;
import java.time.LocalDateTime;
import java.util.List;

@Slf4j
@Controller
@RequiredArgsConstructor
public class NoticeController {

    private final NoticeService noticeService;
    private final MemberService memberService;

    @GetMapping("/notice")
    public ResponseEntity<List<Notice>> noticeList() {
        List<Notice> noticeList = noticeService.findAllNotice();

        if (noticeList.isEmpty()) {
            return new ResponseEntity<>(null,HttpStatus.OK);
        }

        return new ResponseEntity<>(noticeList,HttpStatus.OK);
    }

    @ResponseBody
    @PostMapping("/notice")
    public ResponseEntity saveNotice(@Valid @RequestBody NoticeForm form, BindingResult bindingResult) {
        noticeService.createNotice(form.title, form.content, form.dateTime, form.member);
        return new ResponseEntity(HttpStatus.OK);
    }
}
