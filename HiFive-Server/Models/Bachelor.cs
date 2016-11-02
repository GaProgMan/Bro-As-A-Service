using System;

namespace HiFive
{
    public sealed class Bachelor
    {
        private static Bachelor instance;
        public DateTime? nextHiFive;

        private Bachelor() {}

        public static Bachelor Instance
        {
            get 
            {
                if (instance == null)
                {
                    instance = new Bachelor();
                }
                return instance;
            }
        }
    }
}