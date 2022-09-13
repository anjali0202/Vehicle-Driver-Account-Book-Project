using Driver_Microservice.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Driver_Microservice.Repository
{
    public interface IDriverRepository
    {
        public List<Driver> DisplayAllDrivers();
        public List<Driver> DriversByVehicleType(string vehicleType);
        public string AddDriver(Driver driver);
        public string RemoveDriver(int licenseNum);
    }
}
