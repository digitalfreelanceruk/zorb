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
          0: {
            time: 'Sunday 17th May <br> 11am - 8pm',
            booked: false
          },
          1: {
            time: 'Monday 18th May <br> 7pm - 8pm',
            booked: false
          },
          2: {
            time: 'Monday 1st June <br> 7pm - 8pm',
            booked: false
          },
          3: {
            time: 'Sunday 7th June <br> 11am - 8pm',
            booked: false
          },
          4: {
            time: 'Monday 8th June <br> 7pm - 8pm',
            booked: false
          },
          5: {
            time: 'Sunday 14th June <br> 11am - 8pm',
            booked: false
          },
          6: {
            time: 'Monday 15th June <br> 7pm - 8pm',
            booked: false
          }
        }
      },
      Greg: {
        name: 'Greg',
        slots: {
          0: {
            time: 'Sunday 17th May <br> 11am - 8pm',
            booked: false
          },
          1: {
            time: 'Monday 18th May <br> 7pm - 8pm',
            booked: false
          },
          2: {
            time: 'Monday 1st June <br> 7pm - 8pm',
            booked: false
          },
          3: {
            time: 'Sunday 7th June <br> 11am - 8pm',
            booked: false
          },
          4: {
            time: 'Monday 8th June <br> 7pm - 8pm',
            booked: false
          },
          5: {
            time: 'Sunday 14th June <br> 11am - 8pm',
            booked: false
          },
          6: {
            time: 'Monday 15th June <br> 7pm - 8pm',
            booked: false
          }
        }
      },
      Tim: {
        name: 'Tim',
        slots: {
          0: {
            time: 'Sunday 17th May <br> 11am - 8pm',
            booked: false
          },
          1: {
            time: 'Monday 18th May <br> 7pm - 8pm',
            booked: false
          },
          2: {
            time: 'Monday 1st June <br> 7pm - 8pm',
            booked: false
          },
          3: {
            time: 'Sunday 7th June <br> 11am - 8pm',
            booked: false
          },
          4: {
            time: 'Monday 8th June <br> 7pm - 8pm',
            booked: false
          },
          5: {
            time: 'Sunday 14th June <br> 11am - 8pm',
            booked: false
          },
          6: {
            time: 'Monday 15th June <br> 7pm - 8pm',
            booked: false
          }
        }
      },
      Danny: {
        name: 'Danny',
        slots: {
          0: {
            time: 'Sunday 17th May <br> 11am - 8pm',
            booked: false
          },
          1: {
            time: 'Monday 18th May <br> 7pm - 8pm',
            booked: false
          },
          2: {
            time: 'Monday 1st June <br> 7pm - 8pm',
            booked: false
          },
          3: {
            time: 'Sunday 7th June <br> 11am - 8pm',
            booked: false
          },
          4: {
            time: 'Monday 8th June <br> 7pm - 8pm',
            booked: false
          },
          5: {
            time: 'Sunday 14th June <br> 11am - 8pm',
            booked: false
          },
          6: {
            time: 'Monday 15th June <br> 7pm - 8pm',
            booked: false
          }
        }
      },
      Ken: {
        name: 'Ken',
        slots: {
          0: {
            time: 'Sunday 17th May <br> 11am - 8pm',
            booked: false
          },
          1: {
            time: 'Monday 18th May <br> 7pm - 8pm',
            booked: false
          },
          2: {
            time: 'Monday 1st June <br> 7pm - 8pm',
            booked: false
          },
          3: {
            time: 'Sunday 7th June <br> 11am - 8pm',
            booked: false
          },
          4: {
            time: 'Monday 8th June <br> 7pm - 8pm',
            booked: false
          },
          5: {
            time: 'Sunday 14th June <br> 11am - 8pm',
            booked: false
          },
          6: {
            time: 'Monday 15th June <br> 7pm - 8pm',
            booked: false
          }
        }
      },
      Martin: {
        name: 'Martin',
        slots: {
          0: {
            time: 'Sunday 17th May <br> 11am - 8pm',
            booked: false
          },
          1: {
            time: 'Monday 18th May <br> 7pm - 8pm',
            booked: false
          },
          2: {
            time: 'Monday 1st June <br> 7pm - 8pm',
            booked: false
          },
          3: {
            time: 'Sunday 7th June <br> 11am - 8pm',
            booked: false
          },
          4: {
            time: 'Monday 8th June <br> 7pm - 8pm',
            booked: false
          },
          5: {
            time: 'Sunday 14th June <br> 11am - 8pm',
            booked: false
          },
          6: {
            time: 'Monday 15th June <br> 7pm - 8pm',
            booked: false
          }
        }
      },
      Paul: {
        name: 'Paul',
        slots: {
          0: {
            time: 'Sunday 17th May <br> 11am - 8pm',
            booked: false
          },
          1: {
            time: 'Monday 18th May <br> 7pm - 8pm',
            booked: false
          },
          2: {
            time: 'Monday 1st June <br> 7pm - 8pm',
            booked: false
          },
          3: {
            time: 'Sunday 7th June <br> 11am - 8pm',
            booked: false
          },
          4: {
            time: 'Monday 8th June <br> 7pm - 8pm',
            booked: false
          },
          5: {
            time: 'Sunday 14th June <br> 11am - 8pm',
            booked: false
          },
          6: {
            time: 'Monday 15th June <br> 7pm - 8pm',
            booked: false
          }
        }
      },
      Butch: {
        name: 'Butch',
        slots: {
          0: {
            time: 'Sunday 17th May <br> 11am - 8pm',
            booked: false
          },
          1: {
            time: 'Monday 18th May <br> 7pm - 8pm',
            booked: false
          },
          2: {
            time: 'Monday 1st June <br> 7pm - 8pm',
            booked: false
          },
          3: {
            time: 'Sunday 7th June <br> 11am - 8pm',
            booked: false
          },
          4: {
            time: 'Monday 8th June <br> 7pm - 8pm',
            booked: false
          },
          5: {
            time: 'Sunday 14th June <br> 11am - 8pm',
            booked: false
          },
          6: {
            time: 'Monday 15th June <br> 7pm - 8pm',
            booked: false
          }
        }
      },
      Adam: {
        name: 'Adam',
        slots: {
          0: {
            time: 'Sunday 17th May <br> 11am - 8pm',
            booked: false
          },
          1: {
            time: 'Monday 18th May <br> 7pm - 8pm',
            booked: false
          },
          2: {
            time: 'Monday 1st June <br> 7pm - 8pm',
            booked: false
          },
          3: {
            time: 'Sunday 7th June <br> 11am - 8pm',
            booked: false
          },
          4: {
            time: 'Monday 8th June <br> 7pm - 8pm',
            booked: false
          },
          5: {
            time: 'Sunday 14th June <br> 11am - 8pm',
            booked: false
          },
          6: {
            time: 'Monday 15th June <br> 7pm - 8pm',
            booked: false
          }
        }
      },
      Moore: {
        name: 'Moore',
        slots: {
          0: {
            time: 'Sunday 17th May <br> 11am - 8pm',
            booked: false
          },
          1: {
            time: 'Monday 18th May <br> 7pm - 8pm',
            booked: false
          },
          2: {
            time: 'Monday 1st June <br> 7pm - 8pm',
            booked: false
          },
          3: {
            time: 'Sunday 7th June <br> 11am - 8pm',
            booked: false
          },
          4: {
            time: 'Monday 8th June <br> 7pm - 8pm',
            booked: false
          },
          5: {
            time: 'Sunday 14th June <br> 11am - 8pm',
            booked: false
          },
          6: {
            time: 'Monday 15th June <br> 7pm - 8pm',
            booked: false
          }
        }
      },
      Jimmy: {
        name: 'Jimmy',
        slots: {
          0: {
            time: 'Sunday 17th May <br> 11am - 8pm',
            booked: false
          },
          1: {
            time: 'Monday 18th May <br> 7pm - 8pm',
            booked: false
          },
          2: {
            time: 'Monday 1st June <br> 7pm - 8pm',
            booked: false
          },
          3: {
            time: 'Sunday 7th June <br> 11am - 8pm',
            booked: false
          },
          4: {
            time: 'Monday 8th June <br> 7pm - 8pm',
            booked: false
          },
          5: {
            time: 'Sunday 14th June <br> 11am - 8pm',
            booked: false
          },
          6: {
            time: 'Monday 15th June <br> 7pm - 8pm',
            booked: false
          }
        }
      },
      Pete: {
        name: 'Pete',
        slots: {
          0: {
            time: 'Sunday 17th May <br> 11am - 8pm',
            booked: false
          },
          1: {
            time: 'Monday 18th May <br> 7pm - 8pm',
            booked: false
          },
          2: {
            time: 'Monday 1st June <br> 7pm - 8pm',
            booked: false
          },
          3: {
            time: 'Sunday 7th June <br> 11am - 8pm',
            booked: false
          },
          4: {
            time: 'Monday 8th June <br> 7pm - 8pm',
            booked: false
          },
          5: {
            time: 'Sunday 14th June <br> 11am - 8pm',
            booked: false
          },
          6: {
            time: 'Monday 15th June <br> 7pm - 8pm',
            booked: false
          }
        }
      },
      John: {
        name: 'John',
        slots: {
          0: {
            time: 'Sunday 17th May <br> 11am - 8pm',
            booked: false
          },
          1: {
            time: 'Monday 18th May <br> 7pm - 8pm',
            booked: false
          },
          2: {
            time: 'Monday 1st June <br> 7pm - 8pm',
            booked: false
          },
          3: {
            time: 'Sunday 7th June <br> 11am - 8pm',
            booked: false
          },
          4: {
            time: 'Monday 8th June <br> 7pm - 8pm',
            booked: false
          },
          5: {
            time: 'Sunday 14th June <br> 11am - 8pm',
            booked: false
          },
          6: {
            time: 'Monday 15th June <br> 7pm - 8pm',
            booked: false
          }
        }
      }
    });    

  };
  
});
