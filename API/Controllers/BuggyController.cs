using System;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BuggyController : BaseApiController
    {
        [HttpGet("not-found")]
        public ActionResult GetNotFound()
        {
            return NotFound();

        }

        [HttpGet("bad-request")]
        public ActionResult GetBadRequest(){
            return BadRequest(new ProblemDetails{Title = "This is a Bad Request "});
        }

        [HttpGet("unauthorized")]
        public ActionResult GetUnAuthorized(){
            return Unauthorized();
        }

        [HttpGet("validation-error")]
        public ActionResult GetValidationError()
        {
            ModelState.AddModelError("Problem1", "First Error");
            ModelState.AddModelError("Problem2", "Second Error");
            return ValidationProblem();
        }

        [HttpGet("server-error")]
        public ActionResult GetServerError(){
            throw new Exception("This is a server Error");
        }
    }
}