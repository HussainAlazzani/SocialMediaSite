using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Create
    {
        public class Command : IRequest
        {
            // This is what we want to receive from our API as a parameter
            public Activity Activity { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                // We need not use AddAsync() because it is only used to access
                // SQL server asynchronously. See documentation. We are not using DB yet.
                _context.Activities.Add(request.Activity);
                await _context.SaveChangesAsync();
                
                return Unit.Value;
            }
        }
    }
}