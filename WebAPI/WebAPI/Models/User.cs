using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class User
    {

        [Required, MinLength(3)]
        public string UserLogin { get; set; }
        /*[Required, MinLength(3)]*/

        [Required, MinLength(8)]
        public string UserPassword { get; set; }
        /*[Required, MinLength(3)]*/
        
    }
}
