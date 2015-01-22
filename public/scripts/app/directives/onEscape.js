define(function() {
  return function() {
    var ESCAPE_KEY;
    ESCAPE_KEY = 27;
    return function(scope, elem, attrs) {
      return elem.bind('keydown', function(event) {
        if (event.keyCode === ESCAPE_KEY) {
          scope.$apply(attrs.onEscape);
        }
      });
    };
  };
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL2hvYm9jaGlsZC9EZXNrdG9wL2Nsb25vc0Zyb250ZW5kL211c2ljLXBsYXllci13ZWItZnJvbnQtZW5kL3B1YmxpYy9zY3JpcHRzL2FwcC9kaXJlY3RpdmVzL29uRXNjYXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL1VzZXJzL2hvYm9jaGlsZC9EZXNrdG9wL2Nsb25vc0Zyb250ZW5kL211c2ljLXBsYXllci13ZWItZnJvbnQtZW5kL3NyYy9zY3JpcHRzL2FwcC9kaXJlY3RpdmVzL29uRXNjYXBlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFBLENBQU8sU0FBQSxHQUFBO1NBQUcsU0FBQSxHQUFBO0FBQ1QsUUFBQSxVQUFBO0FBQUEsSUFBQSxVQUFBLEdBQWEsRUFBYixDQUFBO1dBRUEsU0FBQyxLQUFELEVBQVEsSUFBUixFQUFjLEtBQWQsR0FBQTthQUNDLElBQUksQ0FBQyxJQUFMLENBQVUsU0FBVixFQUFxQixTQUFDLEtBQUQsR0FBQTtBQUNwQixRQUFBLElBQWdDLEtBQUssQ0FBQyxPQUFOLEtBQWlCLFVBQWpEO0FBQUEsVUFBQSxLQUFLLENBQUMsTUFBTixDQUFhLEtBQUssQ0FBQyxRQUFuQixDQUFBLENBQUE7U0FEb0I7TUFBQSxDQUFyQixFQUREO0lBQUEsRUFIUztFQUFBLEVBQUg7QUFBQSxDQUFQLENBQUEsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImRlZmluZSAtPiAtPlxuXHRFU0NBUEVfS0VZID0gMjdcblxuXHQoc2NvcGUsIGVsZW0sIGF0dHJzKSAtPlxuXHRcdGVsZW0uYmluZCAna2V5ZG93bicsIChldmVudCkgLT5cblx0XHRcdHNjb3BlLiRhcHBseShhdHRycy5vbkVzY2FwZSkgaWYgZXZlbnQua2V5Q29kZSA9PSBFU0NBUEVfS0VZXG5cblx0XHRcdHJldHVyblxuIl19