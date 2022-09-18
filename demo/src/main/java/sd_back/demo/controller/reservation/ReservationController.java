package sd_back.demo.controller.reservation;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import sd_back.demo.domain.Reservation;
import sd_back.demo.service.ReservationService;

import javax.validation.Valid;

@Slf4j
@Controller
@RequiredArgsConstructor
public class ReservationController {

    private final ReservationService reservationService;

    @GetMapping("/reservation")
    public String reservationForm() {
        return "/reservation";
    }

    @ResponseBody
    @PostMapping("/reservation")
    public ResponseEntity reservation(@Valid @RequestBody ReservationForm form, BindingResult bindingResult) {

        if (bindingResult.hasErrors()) {
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }

        Reservation saveReservation = reservationService.saveReservation(form.getDate(), form.getTime(), form.getStudentId());
        if (saveReservation == null) {
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity(HttpStatus.OK);
    }
}
