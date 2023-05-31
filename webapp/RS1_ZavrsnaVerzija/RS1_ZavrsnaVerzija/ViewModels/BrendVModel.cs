using SeminarskiTest.Models;
using System.ComponentModel.DataAnnotations.Schema;

namespace SeminarskiTest.ViewModels
{
    public class BrendVModel
    {
        public string NazivBrenda { get; set; }

        public int? DrzavaId { get; set; }

        public string Luxury { get; set; }
        public string Slika { get; set; }

    }
}
