package sd_back.demo.controller.notice;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import sd_back.demo.domain.Notice;
import sd_back.demo.service.MemberService;
import sd_back.demo.service.NoticeService;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@Slf4j
@Controller
@RequiredArgsConstructor
public class NoticeController {

    private final NoticeService noticeService;
    private final MemberService memberService;

    @GetMapping("/notice")//공지사항 전체 리스트(초기 화면)
    public ResponseEntity<List<Notice>> noticeList() {
        List<Notice> noticeList = noticeService.findAllNotice();

        if (noticeList.isEmpty()) {
            return new ResponseEntity<>(null, HttpStatus.OK);
        }
        return new ResponseEntity<>(noticeList, HttpStatus.OK);
    }

    @ResponseBody
    @PostMapping("/notice")//공지사항 생성
    public ResponseEntity saveNotice(@Valid @RequestBody NoticeForm form, BindingResult bindingResult) {
        noticeService.createNotice(form.title, form.content, form.dateTime, form.member);
        return new ResponseEntity(HttpStatus.OK);
    }

    @ResponseBody
    @GetMapping("/notice/{id}")
    public ResponseEntity getNoticeById(@PathVariable int id) { //공지사항 상세 내용
        Optional<Notice> noticeById = noticeService.findNoticeById(id);

        if (noticeById.isEmpty()) {
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity(noticeById.get(), HttpStatus.OK);
    }

    @ResponseBody
    @PutMapping("/notice/{id}") //공지사항 업데이트
    public ResponseEntity updateNotice(@PathVariable int id, @Valid @RequestBody NoticeForm form, BindingResult bindingResult) {
        Optional<Notice> notice = noticeService.updateNotice(id, form.title, form.content, form.dateTime);

        if (notice.isEmpty()) {
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity(notice, HttpStatus.OK);
    }

    @ResponseBody
    @DeleteMapping("/notice/{id}")
    public ResponseEntity deleteNotice(@PathVariable int id) { //공지사항 삭제
        if(!noticeService.deleteNotice(id)){
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity(HttpStatus.OK);
    }
}
