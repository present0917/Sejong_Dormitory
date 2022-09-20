package sd_back.demo.repository.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import sd_back.demo.domain.Reservation;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface JpaReservationRepository extends JpaRepository<Reservation, Integer> {

    Optional<Reservation> findByDateAndTime(LocalDate date, int time);//date의 해당 time 예약 정보 반환

    List<Reservation> findByMemberId(int memberId);

    @Modifying(clearAutomatically = true)
    @Query("update Reservation m set m.date = :date, m.time=:time")
    Optional<Reservation> Update(@Param("date") LocalDate date, @Param("time") int time);
}
