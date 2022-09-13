using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Vehicle_Microservice.Model;

namespace Vehicle_Microservice.Data
{
    public class VehicleMicroserviceDBContext : DbContext
    {
        public VehicleMicroserviceDBContext( DbContextOptions options) : base(options)
        {
        }
        public DbSet<Vehicle> Vehicles { get; set; }
    }
    
}
