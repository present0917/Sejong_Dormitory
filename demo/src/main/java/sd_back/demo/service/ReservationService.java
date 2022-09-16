package sd_back.demo.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import sd_back.demo.domain.Reservation;
import sd_back.demo.repository.calender.MemoryReservationRepository;

import java.time.LocalDate;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ReservationService {

    private final MemoryReservationRepository reservationRepository;

    public Reservation makeReservation(LocalDate date, int time, int studentId){ //예약 서비스

        Reservation reservation = new Reservation(date, time, true, studentId);
        Optional<Reservation> findReservation = reservationRepository.findByStudentId(studentId);

        if (findReservation.isEmpty()) { //해당 예약 정보가 없다면
            
        }

        return reservation;
    }

}
