package sd_back.demo.repository.reservation;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import sd_back.demo.domain.Reservation;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface JpaReservationRepository extends JpaRepository<Reservation, Integer> {
    Optional<Reservation> findByDateAndTime(LocalDate date, int time);//date의 해당 time 예약 정보 반환
    List<Reservation> findByMemberId(long memberId);

//    Optional<Reservation> findById(int id);
//    @Transactional
//    @Modifying(clearAutomatically = true)
//    @Query("update Reservation m set m.date = :date, m.time=:time where m.id = :id")
//    Optional<Reservation> Update(@Param("date") LocalDate date, @Param("time") int time, @Param("id") Long id);

    @Transactional
    @Modifying(clearAutomatically = true)
    @Query(value = "delete from Reservation b where b.id = :id")
    void deleteById(@Param("id") int id);
}
