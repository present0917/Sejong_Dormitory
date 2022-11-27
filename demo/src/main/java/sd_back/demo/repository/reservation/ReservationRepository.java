package sd_back.demo.repository.reservation;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import sd_back.demo.domain.Reservation;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface ReservationRepository {

    Reservation save(Reservation reservation);
    void update(Long id, LocalDate date, int time);

    Optional<Reservation> findById(Long id);
    Optional<Reservation> findByTime(LocalDate date, int time);
    List<Reservation> findByStudentId(int studentId);

    List<Reservation> findAll();

    Reservation delete(Reservation reservation);

    @Transactional
    @Modifying(clearAutomatically = true)
    @Query(value = "delete from Reservation b where b.id = :id")
    void deleteById(@Param("id") int id);

}
