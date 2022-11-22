package sd_back.demo.controller.reservation;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import sd_back.demo.domain.Member;
import sd_back.demo.domain.Reservation;
import sd_back.demo.service.MemberService;
import sd_back.demo.service.ReservationService;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@Slf4j
@Controller
@RequiredArgsConstructor
public class ReservationController {
    private final ReservationService reservationService;
    private final MemberService memberService;

    @GetMapping("/reservation")
    public ResponseEntity reservationForm() {
        return new ResponseEntity(HttpStatus.OK);
    }

    @ResponseBody
    @PostMapping("/reservation")
    public ResponseEntity reservation(@Valid @RequestBody ReservationForm form, BindingResult bindingResult) { //예약하기

        if (bindingResult.hasErrors()) {
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }
        Reservation saveReservation = reservationService.saveReservation(form.getDate(), form.getTime(), form.getMember());
        if (saveReservation == null) {
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity(HttpStatus.OK);
    }

    @ResponseBody
    @GetMapping("/reservation/{memberId}")
    public ResponseEntity reservationList(@PathVariable int memberId) { //해당 학생의 예약 리스트 json으로 보내주기
        Optional<Member> member = Optional.ofNullable(memberService.findById((long) memberId));
        if (member.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        List<Reservation> list = reservationService.findReservationListOfMember(member.get());

        if (list.isEmpty()) {
            return new ResponseEntity<>(null, HttpStatus.OK);

        }
        return new ResponseEntity(list, HttpStatus.OK);
    }

    @DeleteMapping("/reservation")
    public ResponseEntity cancleReservation(@Valid @RequestBody ReservationForm form, BindingResult bindingResult) { //예약 취소
        if (bindingResult.hasErrors()) {
            return new ResponseEntity((HttpStatus.BAD_REQUEST));
        }
        if(reservationService.cancelReservation(form.getDate(), form.getTime())){
            return new ResponseEntity(HttpStatus.OK);
        }

        return new ResponseEntity(HttpStatus.BAD_REQUEST);
    }
}
