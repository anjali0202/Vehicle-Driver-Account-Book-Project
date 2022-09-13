using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Vehicle_Microservice.Model
{
    public class UpdateVehicle
    {
        public string ModelName { get; set; }
        public string VehicleType { get; set; }
        public int NumberOfSeat { get; set; }
        public string AcAvailable { get; set; }
    }
}
