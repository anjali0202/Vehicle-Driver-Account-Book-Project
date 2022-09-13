using Booking_Microservice.Data;
using Booking_Microservice.Model;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace Booking_Microservice.Repository
{
    public class BookingRepository:IBookingRepository
    {
        private readonly _db _db;

        public BookingRepository(_db _dbContext)
        {
            _db = _dbContext;
        }
        public IEnumerable<Driver> GetAllDrivers(string token)
        {
            try
            {
                IEnumerable<Driver> drivers;
                HttpResponseMessage response = new HttpResponseMessage();
                HttpClientHandler clientHandler = new HttpClientHandler();
                clientHandler.ServerCertificateCustomValidationCallback = (sender, cert, chain, sslPolicyErrors) => { return true; };
                using (var client = new HttpClient())
                {
                    client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", token);
                    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                    response = client.GetAsync("https://localhost:44342/api/Driver/getAllDrivers").Result;

                    if ((int)response.StatusCode != 200) return null;

                    drivers = JsonConvert.DeserializeObject<IEnumerable<Driver>>(response.Content.ReadAsStringAsync().Result);
                    return drivers;
                }
            }
            catch (Exception exception)
            {
                throw exception;
            }
        }
        public IEnumerable<Vehicle> GetAllVehicles(string token)
        {
            try
            {
                IEnumerable<Vehicle> vehicles;
                HttpResponseMessage response = new HttpResponseMessage();
                HttpClientHandler clientHandler = new HttpClientHandler();
                clientHandler.ServerCertificateCustomValidationCallback = (sender, cert, chain, sslPolicyErrors) => { return true; };
                using (var client = new HttpClient())
                {
                    client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", token);
                    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                    response = client.GetAsync("https://localhost:44371/api/Vehicle/allVehicles").Result;

                    if ((int)response.StatusCode != 200) return null;

                    vehicles = JsonConvert.DeserializeObject<IEnumerable<Vehicle>>(response.Content.ReadAsStringAsync().Result);
                    return vehicles;
                }
            }
            catch (Exception exception)
            {
                throw exception;
            }
        }
        public DriverVehicle GetAllAvailableDriversVehicles(string token)
        {
            try
            {
                DateTime today = DateTime.UtcNow;
                var allDrivers = GetAllDrivers(token).ToList();
                var allVehicles = GetAllVehicles(token).ToList(); ;
                var activeBookings = _db.Bookings.Where(x => x.EndDateTime > today);
                
                foreach (var booking in activeBookings)
                {
                    var driver = allDrivers.FirstOrDefault(x => x.DriverId == booking.DriverId);
                    if (driver != null) allDrivers.Remove(driver);
                    var vehicle = allVehicles.FirstOrDefault(x => x.RegistrationNo == booking.VehicleId);
                    if (vehicle != null) allVehicles.Remove(vehicle);
                }
                return new DriverVehicle { Vehicles = allVehicles, Drivers = allDrivers };
            }
            catch (Exception)
            {

                throw;
            }
        }
        
        public string AddBooking(Booking booking)
        {
            try
            {
                if (_db.Bookings.Any(p => p.Booking_ID == booking.Booking_ID))
                {
                    return "false";
                }
                _db.Bookings.Add(booking);
                _db.SaveChanges();
                return "true";
            }
            catch (Exception e)
            {
                throw e;
            }
        }
        public Booking DisplayBookingById(int bookingId)
        {
            try
            {
                return _db.Bookings.SingleOrDefault(p => p.Booking_ID == bookingId);

            }
            catch (Exception e)
            {

                throw e;
            }
        }
        public IEnumerable<Booking> DisplayAllBookings()
        {
            try
            {
                return _db.Bookings.ToList();

            }
            catch (Exception e)
            {

                throw e;
            }
        }
        public IEnumerable<Booking> DisplayBookingByDateTime(DateTime startDateTime,DateTime endDateTime)
        {
            return _db.Bookings.ToList().Where(p => p.StartDateTime.ToString("yyyy-MM-dd") == startDateTime.ToString("yyyy-MM-dd") &&  p.EndDateTime.ToString("yyyy-MM-dd") == endDateTime.ToString("yyyy-MM-dd"));
        }
    }
}
