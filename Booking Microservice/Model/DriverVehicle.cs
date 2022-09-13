using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Booking_Microservice.Model
{
    public class DriverVehicle
    {
        public IEnumerable<Vehicle> Vehicles { get; set; }
        public IEnumerable<Driver> Drivers { get; set; }
    }
}
