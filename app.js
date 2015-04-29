// create our angular module and inject firebase
angular.module('scheduleApp', ['firebase'])

// create our main controller and get access to firebase
.controller('mainController', function($scope, $firebase) {
  
   // connect to firebase 
  var ref = new Firebase("https://incandescent-heat-8927.firebaseio.com/days");  
  var fb = $firebase(ref);
  
  // sync as object 
  var syncObject = fb.$asObject();
  
   // three way data binding
  syncObject.$bindTo($scope, 'days');
  
  // function to set the default data
  $scope.reset = function() {    

    fb.$set({
      Ben: {
        name: 'Ben',
        slots: {
          100: {
            date: 'Sunday 17th May',
            time: '11am - 8pm',
            booked: false
          },
          200: {
            date: 'Monday 18th May',
            time: '7pm - 8pm',
            booked: false
          },
          300: {
            date: 'Monday 1st June',
            time: '7pm - 8pm',
            booked: false
          },
          400: {
            date: 'Sunday 7th June',
            time: '11am - 8pm',
            booked: false
          },
          500: {
            date: 'Monday 8th June',
            time: '7pm - 8pm',
            booked: false
          },
          600: {
            date: 'Sunday 14th June',
            time: '11am - 8pm',
            booked: false
          },
          700: {
            date: 'Monday 15th June',
            time: '7pm - 8pm',
            booked: false
          }
        }
      },
      Greg: {
        name: 'Greg',
        slots: {
          100: {
            date: 'Sunday 17th May',
            time: '11am - 8pm',
            booked: false
          },
          200: {
            date: 'Monday 18th May',
            time: '7pm - 8pm',
            booked: false
          },
          300: {
            date: 'Monday 1st June',
            time: '7pm - 8pm',
            booked: false
          },
          400: {
            date: 'Sunday 7th June',
            time: '11am - 8pm',
            booked: false
          },
          500: {
            date: 'Monday 8th June',
            time: '7pm - 8pm',
            booked: false
          },
          600: {
            date: 'Sunday 14th June',
            time: '11am - 8pm',
            booked: false
          },
          700: {
            date: 'Monday 15th June',
            time: '7pm - 8pm',
            booked: false
          }
        }
      },
      Tim: {
        name: 'Tim',
        slots: {
          100: {
            date: 'Sunday 17th May',
            time: '11am - 8pm',
            booked: false
          },
          200: {
            date: 'Monday 18th May',
            time: '7pm - 8pm',
            booked: false
          },
          300: {
            date: 'Monday 1st June',
            time: '7pm - 8pm',
            booked: false
          },
          400: {
            date: 'Sunday 7th June',
            time: '11am - 8pm',
            booked: false
          },
          500: {
            date: 'Monday 8th June',
            time: '7pm - 8pm',
            booked: false
          },
          600: {
            date: 'Sunday 14th June',
            time: '11am - 8pm',
            booked: false
          },
          700: {
            date: 'Monday 15th June',
            time: '7pm - 8pm',
            booked: false
          }
        }
      },
      Danny: {
        name: 'Danny',
        slots: {
          100: {
            date: 'Sunday 17th May',
            time: '11am - 8pm',
            booked: false
          },
          200: {
            date: 'Monday 18th May',
            time: '7pm - 8pm',
            booked: false
          },
          300: {
            date: 'Monday 1st June',
            time: '7pm - 8pm',
            booked: false
          },
          400: {
            date: 'Sunday 7th June',
            time: '11am - 8pm',
            booked: false
          },
          500: {
            date: 'Monday 8th June',
            time: '7pm - 8pm',
            booked: false
          },
          600: {
            date: 'Sunday 14th June',
            time: '11am - 8pm',
            booked: false
          },
          700: {
            date: 'Monday 15th June',
            time: '7pm - 8pm',
            booked: false
          }
        }
      },
      Ken: {
        name: 'Ken',
        slots: {
          100: {
            date: 'Sunday 17th May',
            time: '11am - 8pm',
            booked: false
          },
          200: {
            date: 'Monday 18th May',
            time: '7pm - 8pm',
            booked: false
          },
          300: {
            date: 'Monday 1st June',
            time: '7pm - 8pm',
            booked: false
          },
          400: {
            date: 'Sunday 7th June',
            time: '11am - 8pm',
            booked: false
          },
          500: {
            date: 'Monday 8th June',
            time: '7pm - 8pm',
            booked: false
          },
          600: {
            date: 'Sunday 14th June',
            time: '11am - 8pm',
            booked: false
          },
          700: {
            date: 'Monday 15th June',
            time: '7pm - 8pm',
            booked: false
          }
        }
      },
      Martin: {
        name: 'Martin',
        slots: {
          100: {
            date: 'Sunday 17th May',
            time: '11am - 8pm',
            booked: false
          },
          200: {
            date: 'Monday 18th May',
            time: '7pm - 8pm',
            booked: false
          },
          300: {
            date: 'Monday 1st June',
            time: '7pm - 8pm',
            booked: false
          },
          400: {
            date: 'Sunday 7th June',
            time: '11am - 8pm',
            booked: false
          },
          500: {
            date: 'Monday 8th June',
            time: '7pm - 8pm',
            booked: false
          },
          600: {
            date: 'Sunday 14th June',
            time: '11am - 8pm',
            booked: false
          },
          700: {
            date: 'Monday 15th June',
            time: '7pm - 8pm',
            booked: false
          }
        }
      },
      Paul: {
        name: 'Paul',
        slots: {
          100: {
            date: 'Sunday 17th May',
            time: '11am - 8pm',
            booked: false
          },
          200: {
            date: 'Monday 18th May',
            time: '7pm - 8pm',
            booked: false
          },
          300: {
            date: 'Monday 1st June',
            time: '7pm - 8pm',
            booked: false
          },
          400: {
            date: 'Sunday 7th June',
            time: '11am - 8pm',
            booked: false
          },
          500: {
            date: 'Monday 8th June',
            time: '7pm - 8pm',
            booked: false
          },
          600: {
            date: 'Sunday 14th June',
            time: '11am - 8pm',
            booked: false
          },
          700: {
            date: 'Monday 15th June',
            time: '7pm - 8pm',
            booked: false
          }
        }
      },
      Butch: {
        name: 'Butch',
        slots: {
          100: {
            date: 'Sunday 17th May',
            time: '11am - 8pm',
            booked: false
          },
          200: {
            date: 'Monday 18th May',
            time: '7pm - 8pm',
            booked: false
          },
          300: {
            date: 'Monday 1st June',
            time: '7pm - 8pm',
            booked: false
          },
          400: {
            date: 'Sunday 7th June',
            time: '11am - 8pm',
            booked: false
          },
          500: {
            date: 'Monday 8th June',
            time: '7pm - 8pm',
            booked: false
          },
          600: {
            date: 'Sunday 14th June',
            time: '11am - 8pm',
            booked: false
          },
          700: {
            date: 'Monday 15th June',
            time: '7pm - 8pm',
            booked: false
          }
        }
      },
      Adam: {
        name: 'Adam',
        slots: {
          100: {
            date: 'Sunday 17th May',
            time: '11am - 8pm',
            booked: false
          },
          200: {
            date: 'Monday 18th May',
            time: '7pm - 8pm',
            booked: false
          },
          300: {
            date: 'Monday 1st June',
            time: '7pm - 8pm',
            booked: false
          },
          400: {
            date: 'Sunday 7th June',
            time: '11am - 8pm',
            booked: false
          },
          500: {
            date: 'Monday 8th June',
            time: '7pm - 8pm',
            booked: false
          },
          600: {
            date: 'Sunday 14th June',
            time: '11am - 8pm',
            booked: false
          },
          700: {
            date: 'Monday 15th June',
            time: '7pm - 8pm',
            booked: false
          }
        }
      },
      Moore: {
        name: 'Moore',
        slots: {
          100: {
            date: 'Sunday 17th May',
            time: '11am - 8pm',
            booked: false
          },
          200: {
            date: 'Monday 18th May',
            time: '7pm - 8pm',
            booked: false
          },
          300: {
            date: 'Monday 1st June',
            time: '7pm - 8pm',
            booked: false
          },
          400: {
            date: 'Sunday 7th June',
            time: '11am - 8pm',
            booked: false
          },
          500: {
            date: 'Monday 8th June',
            time: '7pm - 8pm',
            booked: false
          },
          600: {
            date: 'Sunday 14th June',
            time: '11am - 8pm',
            booked: false
          },
          700: {
            date: 'Monday 15th June',
            time: '7pm - 8pm',
            booked: false
          }
        }
      },
      Jimmy: {
        name: 'Jimmy',
        slots: {
          100: {
            date: 'Sunday 17th May',
            time: '11am - 8pm',
            booked: false
          },
          200: {
            date: 'Monday 18th May',
            time: '7pm - 8pm',
            booked: false
          },
          300: {
            date: 'Monday 1st June',
            time: '7pm - 8pm',
            booked: false
          },
          400: {
            date: 'Sunday 7th June',
            time: '11am - 8pm',
            booked: false
          },
          500: {
            date: 'Monday 8th June',
            time: '7pm - 8pm',
            booked: false
          },
          600: {
            date: 'Sunday 14th June',
            time: '11am - 8pm',
            booked: false
          },
          700: {
            date: 'Monday 15th June',
            time: '7pm - 8pm',
            booked: false
          }
        }
      },
      Pete: {
        name: 'Pete',
        slots: {
          100: {
            date: 'Sunday 17th May',
            time: '11am - 8pm',
            booked: false
          },
          200: {
            date: 'Monday 18th May',
            time: '7pm - 8pm',
            booked: false
          },
          300: {
            date: 'Monday 1st June',
            time: '7pm - 8pm',
            booked: false
          },
          400: {
            date: 'Sunday 7th June',
            time: '11am - 8pm',
            booked: false
          },
          500: {
            date: 'Monday 8th June',
            time: '7pm - 8pm',
            booked: false
          },
          600: {
            date: 'Sunday 14th June',
            time: '11am - 8pm',
            booked: false
          },
          700: {
            date: 'Monday 15th June',
            time: '7pm - 8pm',
            booked: false
          }
        }
      },
      John: {
        name: 'John',
        slots: {
          100: {
            date: 'Sunday 17th May',
            time: '11am - 8pm',
            booked: false
          },
          200: {
            date: 'Monday 18th May',
            time: '7pm - 8pm',
            booked: false
          },
          300: {
            date: 'Monday 1st June',
            time: '7pm - 8pm',
            booked: false
          },
          400: {
            date: 'Sunday 7th June',
            time: '11am - 8pm',
            booked: false
          },
          500: {
            date: 'Monday 8th June',
            time: '7pm - 8pm',
            booked: false
          },
          600: {
            date: 'Sunday 14th June',
            time: '11am - 8pm',
            booked: false
          },
          700: {
            date: 'Monday 15th June',
            time: '7pm - 8pm',
            booked: false
          }
        }
      }
    });    

  };
  
});
