import { useMemo, useRef, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Phone,
  Plus,
  Search,
  Users,
  X,
} from 'lucide-react';
import { DialogAction } from '@/shared/components/preview';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { sampleReservations, type CalendarReservation } from '../data/calendar-reservations';
import styles from './ReservationsCalendar.module.css';

function dateKey(date: Date) {
  return date.toISOString().slice(0, 10);
}
function dateLabel(date: string) {
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T12:00:00Z`));
}
function displayTime(time: string) {
  const [hours, minutes] = time.split(':').map(Number);
  return `${hours % 12 || 12}:${String(minutes).padStart(2, '0')} ${hours >= 12 ? 'PM' : 'AM'}`;
}
function endTime(reservation: CalendarReservation) {
  const end = new Date(`${reservation.date}T${reservation.time}:00Z`);
  end.setUTCMinutes(end.getUTCMinutes() + reservation.duration);
  return `${displayTime(end.toISOString().slice(11, 16))}${dateKey(end) !== reservation.date ? ' (+1 day)' : ''}`;
}

export function ReservationsCalendar() {
  const [today] = useState(() =>
    new Intl.DateTimeFormat('en-CA', {
      timeZone: 'Asia/Dhaka',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).format(new Date()),
  );
  const [month, setMonth] = useState(() => today.slice(0, 7));
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [query, setQuery] = useState('');
  const selectedButton = useRef<HTMLButtonElement | null>(null);
  const first = new Date(`${month}-01T12:00:00Z`);
  const monthLabel = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(first);
  const days = Array.from({ length: 42 }, (_, index) => {
    const day = new Date(first);
    day.setUTCDate(1 - first.getUTCDay() + index);
    return dateKey(day);
  });
  const reservationsByDate = useMemo(() => {
    const grouped: Record<string, CalendarReservation[]> = {};
    const search = query.trim().toLowerCase();
    for (const reservation of sampleReservations) {
      const text =
        `${reservation.name} ${reservation.phone} ${reservation.reference}`.toLowerCase();
      if (search && !text.includes(search)) continue;
      (grouped[reservation.date] ||= []).push(reservation);
    }
    for (const list of Object.values(grouped)) list.sort((a, b) => a.time.localeCompare(b.time));
    return grouped;
  }, [query]);
  const monthReservations = Object.entries(reservationsByDate)
    .filter(([date]) => date.startsWith(month))
    .flatMap(([, bookings]) => bookings);
  const activeCount = monthReservations.filter((booking) => booking.status !== 'cancelled').length;
  const dayReservations = selectedDate ? reservationsByDate[selectedDate] || [] : [];
  const shiftMonth = (offset: number) => {
    const next = new Date(first);
    next.setUTCMonth(next.getUTCMonth() + offset);
    setMonth(dateKey(next).slice(0, 7));
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <h1>Reservations</h1>
          <p>Choose a date to see who’s joining us.</p>
        </div>
        <div className={styles.actions}>
          <div className={styles.search}>
            <Search size={16} aria-hidden="true" />
            <Input
              aria-label="Search reservations"
              placeholder="Search name or phone"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
          <DialogAction target="add_reservation" variant="default">
            <Plus size={16} /> Add New
          </DialogAction>
        </div>
      </header>

      <section className={styles.calendar} aria-label="Reservation calendar">
        <div className={styles.toolbar}>
          <div>
            <h2 aria-live="polite">{monthLabel}</h2>
            <p>
              {activeCount} active {activeCount === 1 ? 'reservation' : 'reservations'}
              {query.trim() ? ' matching your search' : ''}
            </p>
          </div>
          <div className={styles.monthControls}>
            <Button variant="outline" size="sm" onClick={() => setMonth(today.slice(0, 7))}>
              Today
            </Button>
            <Button
              variant="outline"
              size="icon"
              aria-label="Previous month"
              onClick={() => shiftMonth(-1)}
            >
              <ChevronLeft />
            </Button>
            <Button
              variant="outline"
              size="icon"
              aria-label="Next month"
              onClick={() => shiftMonth(1)}
            >
              <ChevronRight />
            </Button>
          </div>
        </div>
        <div className={styles.weekdays} aria-hidden="true">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <span key={day}>{day}</span>
          ))}
        </div>
        <div className={styles.days}>
          {days.map((date) => {
            const bookings = reservationsByDate[date] || [];
            const active = bookings.filter((booking) => booking.status !== 'cancelled');
            const inMonth = date.startsWith(month);
            return (
              <button
                key={date}
                type="button"
                className={`${styles.day} ${inMonth ? '' : styles.otherMonth} ${date === today ? styles.today : ''} ${date === selectedDate ? styles.selected : ''}`}
                aria-label={`${dateLabel(date)}, ${active.length} active reservations${bookings.length && !active.length ? ', cancelled bookings only' : ''}`}
                aria-pressed={date === selectedDate}
                aria-current={date === today ? 'date' : undefined}
                onClick={(event) => {
                  selectedButton.current = event.currentTarget;
                  setSelectedDate(date);
                }}
              >
                <span className={styles.dayNumber}>{Number(date.slice(-2))}</span>
                {active.length > 0 && (
                  <span className={styles.bookingIndicator}>
                    <i /> <span className={styles.bookingText}>{active.length} booked</span>
                    <span className={styles.mobileCount}>{active.length}</span>
                  </span>
                )}
                {active.length > 0 && (
                  <span className={styles.firstTime}>
                    {displayTime(active[0].time)}
                    {active.length > 1 ? ` +${active.length - 1}` : ''}
                  </span>
                )}
                {bookings.length > 0 && !active.length && (
                  <span className={styles.cancelledOnly}>Cancelled</span>
                )}
              </button>
            );
          })}
        </div>
        <footer className={styles.legend}>
          <span>
            <i /> Booked / paid
          </span>
          <span className={styles.todayLegend}>Today</span>
          <span>Click any date to view reservations</span>
        </footer>
      </section>
      {query.trim() && monthReservations.length === 0 && (
        <p className={styles.noResults} role="status">
          No matching reservations in {monthLabel}. Try another month or search.
        </p>
      )}

      <Dialog.Root
        open={selectedDate !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedDate(null);
        }}
      >
        <Dialog.Portal>
          <Dialog.Overlay className={styles.overlay} />
          <Dialog.Content
            className={styles.drawer}
            onCloseAutoFocus={(event) => {
              event.preventDefault();
              selectedButton.current?.focus();
            }}
          >
            <div className={styles.drawerHeader}>
              <span className={styles.eyebrow}>
                <CalendarDays size={15} /> Daily reservations
              </span>
              <Dialog.Title className={styles.drawerTitle}>
                {selectedDate ? dateLabel(selectedDate) : 'Reservations'}
              </Dialog.Title>
              <Dialog.Description className={styles.drawerDescription}>
                {dayReservations.length}{' '}
                {dayReservations.length === 1 ? 'reservation' : 'reservations'}
                {query.trim() ? ' matching your search' : ''} · sorted by start time
              </Dialog.Description>
              <Dialog.Close className={styles.close} aria-label="Close reservations drawer">
                <X size={20} />
              </Dialog.Close>
            </div>
            <div className={styles.drawerBody}>
              {dayReservations.length ? (
                <ol className={styles.reservationList}>
                  {dayReservations.map((reservation) => (
                    <li key={reservation.id} className={styles.reservation}>
                      <div className={styles.timeRow}>
                        <span>
                          <Clock3 size={15} /> {displayTime(reservation.time)} –{' '}
                          {endTime(reservation)}
                        </span>
                        <span className={`${styles.status} ${styles[reservation.status]}`}>
                          {reservation.status}
                        </span>
                      </div>
                      <h3>{reservation.name}</h3>
                      <a
                        className={styles.phone}
                        href={`tel:${reservation.phone.replace(/[^+\d]/g, '')}`}
                      >
                        <Phone size={15} />
                        {reservation.phone}
                      </a>
                      <div className={styles.bookingMeta}>
                        <span>
                          <Users size={14} />
                          {reservation.guests} guests
                        </span>
                        <span>{reservation.duration} min</span>
                        <span>{reservation.reference}</span>
                      </div>
                    </li>
                  ))}
                </ol>
              ) : (
                <div className={styles.empty}>
                  <CalendarDays size={32} />
                  <h3>No reservations</h3>
                  <p>
                    {query.trim()
                      ? 'No bookings match your search on this date.'
                      : 'There are no bookings for this date yet.'}
                  </p>
                </div>
              )}
            </div>
            <div className={styles.drawerFooter}>
              <Button variant="outline" onClick={() => setSelectedDate(null)}>
                Close
              </Button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
