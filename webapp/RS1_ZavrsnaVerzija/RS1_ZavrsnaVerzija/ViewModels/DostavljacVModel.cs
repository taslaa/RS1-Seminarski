using SeminarskiTest.Models;
using System.ComponentModel.DataAnnotations.Schema;

namespace SeminarskiTest.ViewModels
{
    public class DostavljacVModel
    {
        public string Naziv { get; set; }
        public int? DrzavaId { get; set; }
        public string Telefon { get; set; }
    }
}
