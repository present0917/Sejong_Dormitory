package sd_back.demo.repository.calender;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import sd_back.demo.domain.Reservation;

import java.time.LocalDate;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

class MemoryReservationRepositoryTest {

    MemoryReservationRepository reservationRepository = new MemoryReservationRepository();

    @AfterEach
    void afterEach(){ //테스트 끝나면 store 비워줌
        reservationRepository.clearStore();
    }
    @Test
    void save() {
        LocalDate date = LocalDate.of(2022, 9, 16);
        Reservation reservation = new Reservation(date, 15, true, 18011552);
        reservationRepository.save(reservation);

        assertThat(reservationRepository.findById(1L).get()).isEqualTo(reservation);
    }

    @Test
    void findById() {
        LocalDate date = LocalDate.of(2022, 9, 16);
        Reservation reservation = new Reservation(date, 15, true, 18011552);
        reservationRepository.save(reservation);
        assertThat(reservationRepository.findById(1L).get()).isEqualTo(reservation);

    }

    @Test
    void findByTime(){
        LocalDate date = LocalDate.of(2022, 9, 16);
        Reservation reservation = new Reservation(date, 11, true, 18011550);
        Reservation reservation2 = new Reservation(date, 15, true, 18011552);
        reservationRepository.save(reservation);
        reservationRepository.save(reservation2);

        assertThat(reservationRepository.findByTime(date, 11).get()).isEqualTo(reservation);
    }

    @Test
    void findByStudentId() {
        LocalDate date = LocalDate.of(2022, 9, 16);
        Reservation reservation = new Reservation(date, 15, true, 18011552);
        reservationRepository.save(reservation);
        List<Reservation> list = reservationRepository.findByStudentId(reservation.getStudentId());
        assertThat(list.get(0)).isEqualTo(reservation);
    }

    @Test
    void findAll() {
        LocalDate date = LocalDate.of(2022, 9, 16);
        Reservation reservation = new Reservation(date, 11, true, 18011550);
        Reservation reservation2 = new Reservation(date, 15, true, 18011552);
        reservationRepository.save(reservation);
        reservationRepository.save(reservation2);

        List<Reservation> reservationList = reservationRepository.findAll();
        assertThat(reservationList.size()).isEqualTo(2);
    }

    @Test
    void delete() {
        LocalDate date = LocalDate.of(2022, 9, 16);
        Reservation reservation = new Reservation(date, 11, true, 18011550);
        Reservation reservation2 = new Reservation(date, 15, true, 18011552);
        reservationRepository.save(reservation);
        reservationRepository.save(reservation2);
        reservationRepository.delete(reservation);

        List<Reservation> reservationList = reservationRepository.findAll();
        assertThat(reservationList.size()).isEqualTo(1);

    }
}