package sd_back.demo.repository.calender;

import sd_back.demo.domain.Reservation;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface ReservationRepository {

    Reservation save(Reservation reservation);

    Optional<Reservation> findById(Long id);
    Optional<Reservation> findByTime(LocalDate date, int time);
    Optional<Reservation> findByStudentId(int studentId);

    List<Reservation> findAll();

    Reservation delete(Reservation reservation);

}
