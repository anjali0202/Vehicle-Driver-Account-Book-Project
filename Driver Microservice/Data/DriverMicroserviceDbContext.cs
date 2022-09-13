using Driver_Microservice.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Driver_Microservice.Data
{
    public class DriverMicroserviceDbContext : DbContext
    {
        public DriverMicroserviceDbContext( DbContextOptions options) : base(options)
        {
        }
        public DbSet<Driver> Drivers { get; set; }
    }
}
