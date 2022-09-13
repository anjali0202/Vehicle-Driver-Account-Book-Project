using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Booking_Microservice.Model
{
    public class Booking
    {
        [Key]
        public int Booking_ID { get; set; }
        public int VehicleId { get; set; }
	    public int DriverId { get; set; }
	    public DateTime StartDateTime { get; set; }
	    public DateTime EndDateTime { get; set; }
	    public string FromLocation { get; set; }
        public string ToLocation { get; set; }
        public int distance { get; set; }
        public enum Type { pickup, drop, round, tour };
        public int TripFare { get; set; }
        public int FuelExpense { get; set; }
        public int DriverShare { get; set; }
        public string Remarks { get; set; }
    }
}
