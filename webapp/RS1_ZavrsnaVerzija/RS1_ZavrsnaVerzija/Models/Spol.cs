using System.ComponentModel.DataAnnotations;
using SeminarskiTest.Data;

namespace SeminarskiTest.Models
{
    public class Spol
    {
        [Key]
        public int Id { get; set; }
        public string NazivSpola { get; set; }
    }
}
