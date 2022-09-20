package sd_back.demo.controller.reservation;

import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;
import sd_back.demo.domain.Member;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Data
public class ReservationForm {
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate date;

    @NotNull
    private int time;

    @NotNull
    private Member member;

}
