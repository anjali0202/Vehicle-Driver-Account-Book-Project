using AuthenticationMicroservice.Models;
using AuthenticationMicroservice.Repository;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace AuthenticationMicroservice.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : Controller
    {
        private readonly IAuthRepository authRepository;
        private readonly ITokenHandler tokenHandler;

        public AuthController(IAuthRepository authRepository, ITokenHandler tokenHandler)
        {
            this.authRepository = authRepository;
            this.tokenHandler = tokenHandler;
        }

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> LoginAsync(LoginRequest loginRequest)
        {
            // Check if user is authenticated
            // Check username and password
            var admin = await authRepository.AuthenticateAsync(
                loginRequest.Username, loginRequest.Password);

            if (admin != null)
            {
                // Generate a JWT Token
                var token = await tokenHandler.CreateTokenAsync(admin);
                return Ok(new TokenString {Token=token} );
            }

            return BadRequest("Username or Password is incorrect.");
        }
    }
}