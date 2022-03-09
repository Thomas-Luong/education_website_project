(() => {

	angular
		.module ('csci102')
		.controller ('contact', () => {
			let vm = this;
			
			vm.name    = '';
			vm.message = '';
			
			vm.errors = {
				name:    null,
				message: null
			};
			
			vm.onSubmit = (e) => {
				console.log (vm.name);
				if (vm.name.length <= 0 || vm.name.length > 16) {
					vm.errors.name = "Name must be between 1 and 16 characters.";
				} else if (/[^a-z \.]/i.test (vm.name)) {
					vm.errors.name = "Name must only contain letters, spaces and periods.";
				} else {
					vm.errors.name = null;
				}
				
				if (vm.name.length <= 0 || vm.message.length > 256) {
					vm.errors.message = "Message must be between 1 and 256 characters.";
				} else {
					vm.errors.message = null;
				}
				
				for (let key of Object.keys (vm.errors)) {
					if (vm.errors [key]) {
						e.preventDefault ();
						break;
					}
				}
			};
			
			
			
			return vm;
		});

}) ();