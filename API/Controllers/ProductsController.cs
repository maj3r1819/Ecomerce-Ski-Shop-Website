using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{

    
    public class ProductsController : BaseApiController
    {
        private readonly StoreContext _context;

        public ProductsController(StoreContext context)
        {
            _context = context;
            
        }

        [HttpGet("{id}")] 
        //api/products/{id}
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            var product =  await _context.Products.FindAsync(id);
            if (product == null) return NotFound();
            return product;

        }
        [HttpGet]
        // make this fn async because if we have only 1 thread and this fn takes 10 mins then it will block the server.
        public async Task<ActionResult<List<Product>>> GetProducts(){
            return await _context.Products.ToListAsync();
        }


        
    }
}