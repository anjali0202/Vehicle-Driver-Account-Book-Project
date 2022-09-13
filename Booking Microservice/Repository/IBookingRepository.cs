using Booking_Microservice.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Booking_Microservice.Repository
{
    public interface IBookingRepository
    {
        public DriverVehicle GetAllAvailableDriversVehicles(string token);
        public IEnumerable<Driver> GetAllDrivers(string token);
        public IEnumerable<Vehicle> GetAllVehicles(string token);
        public string AddBooking(Booking booking);
        public Booking DisplayBookingById(int bookingId);
        public IEnumerable<Booking> DisplayBookingByDateTime(DateTime startDateTime, DateTime endDateTime);
        public IEnumerable<Booking> DisplayAllBookings();
    }
}
