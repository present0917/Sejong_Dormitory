package sd_back.demo.domain;

import lombok.*;

import java.time.LocalDate;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Reservation { //==calender

    Long id;
    LocalDate date; //2022-09-16 형식
    int time; //9, 11, 13, 15, 17, 19만 받을 수 있음
    boolean isReservation;
    int studentId; //Member table의 외래키


    public Reservation(LocalDate date, int time, boolean isReservation, int studentId) {
        this.date = date;
        this.time = time;
        this.isReservation = isReservation;
        this.studentId = studentId;
    }
}
