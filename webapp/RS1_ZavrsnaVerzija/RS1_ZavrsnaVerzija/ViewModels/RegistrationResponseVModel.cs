namespace SeminarskiTest.ViewModels
{
    public class RegistrationResponseVModel
    {
        public bool IsSuccessfulRegistration { get; set; }
        public IEnumerable<string>? Errors { get; set; }
    }
}
