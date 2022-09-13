using Driver_Microservice.Data;
using Driver_Microservice.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Driver_Microservice.Repository
{
    public class DriverRepository: IDriverRepository
    {
        private readonly DriverMicroserviceDbContext _driverdbContext;
        public DriverRepository(DriverMicroserviceDbContext _driverdbContext)
        {
            this._driverdbContext = _driverdbContext;
        }
        
        public List<Driver> DisplayAllDrivers()
        {
            try
            {
                return _driverdbContext.Drivers.ToList();
            }
            catch(Exception e)
            {
                throw e;
            }
        }
        
        public string AddDriver(Driver driver)
        {
            try
            {
                if (_driverdbContext.Drivers.Any(p => p.DriverId == driver.DriverId))
                {
                    return "false";
                }
                _driverdbContext.Drivers.Add(driver);
                _driverdbContext.SaveChanges();
                return "true";

            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public string RemoveDriver(int licenseNum)
        {
            try
            {
                var driver = _driverdbContext.Drivers.Find(licenseNum);
                if (driver != null)
                {
                    _driverdbContext.Remove(driver);
                    _driverdbContext.SaveChanges();
                    return "true";
                }
                return "false";
            }
            catch(Exception e)
            {
                throw e;
            }
        }

        public List<Driver> DriversByVehicleType(string vehicleType)
        {
            try
            {
                return _driverdbContext.Drivers.Where(p => p.VehicleType == vehicleType).ToList();
            }
            catch(Exception e)
            {
                throw e;

            }
        }
    }
}
