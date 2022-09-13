using AuthenticationMicroservice.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AuthenticationMicroservice.Repository
{
    public interface IAuthRepository
    {
        Task<Admin> AuthenticateAsync(string username, string password);
    }
}
