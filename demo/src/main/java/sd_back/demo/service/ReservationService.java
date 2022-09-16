package sd_back.demo.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import sd_back.demo.domain.Reservation;
import sd_back.demo.repository.calender.MemoryReservationRepository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ReservationService {

    private final MemoryReservationRepository reservationRepository;

    public Reservation makeReservation(LocalDate date, int time, int studentId){ //예약

        Reservation reservation = new Reservation(date, time, true, studentId);
        Optional<Reservation> findReservation = reservationRepository.findByTime(date, time);

        if (findReservation.isEmpty()) { //해당 예약 정보가 없다면
            reservationRepository.save(reservation);
            return reservation;
        }

        return null;
    }

    public List<Reservation> showAllReservation(){
        return reservationRepository.findAll();
    }

    public List<Reservation> reservedListOfStudent(int studentId){
        List<Reservation> list = reservationRepository.findByStudentId(studentId);


        if (list.isEmpty()) { //해당 학생의 예약 정보가 없음
            return null;
        }

        return list;
    }

    public Reservation cancelReservation(LocalDate date, int time, int studentId) {
        Reservation reservation = new Reservation(date, time, true, studentId);
        Optional<Reservation> findReservation = reservationRepository.findByTime(date, time);

        if (findReservation.isEmpty()) { //해당 예약 정보가 없다면
            return null;
        }

        reservationRepository.delete(findReservation.get());

        return findReservation.get();
    }

}
