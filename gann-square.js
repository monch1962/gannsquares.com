function nice_format(n) {
  return n.toFixed(5).replace(/\.?0*$/, '');
}

function gannsquare9() {
  var startno = parseFloat(document.gann.startno.value);
  var level = parseInt(document.gann.levels.value);
  var increment = parseFloat(document.gann.increment.value);
  var title = document.gann.title.value;
  var count = startno
  var center = level;
  var x = y = center;
  var arraySize = 1 + 2 * level;
  var g = new Array(arraySize);
  var i;
  for (i = 0; i < arraySize + 1; i++) {
    g[i] = new Array(arraySize);
  }

  g[x][y] = count;
  var range;
  var current_level = 1;

  while (current_level < level + 1 && x > 0) {
    range = current_level * 2;
    count = count + increment;
    x--;
    g[x][y] = count;
    for (i = 1; i < current_level * 2; i++) {
      y--;
      count = count + increment;
      g[x][y] = count;
    }
    for (i = 0; i < range; i++) {
      x++;
      count = count + increment;
      g[x][y] = count;
    }
    for (i = 0; i < range; i++) {
      y++;
      count = count + increment;
      g[x][y] = count;
    }
    for (i = 0; i < range; i++) {
      x--;
      count = count + increment;
      g[x][y] = count;
    }
    current_level++;
  }

  x_range = y_range = level * 2 + 1;
  const args = [g];

  plotsquare.apply(this, args);

};

function gannsquare4() {
  var startno = parseFloat(document.gann.startno.value);
  var level = parseInt(document.gann.levels.value);
  var increment = parseFloat(document.gann.increment.value);
  var title = document.gann.title.value;
  var count = startno
  var center = level;
  var x = y = center;
  var arraySize = 2 + 2 * level;
  var g = new Array(arraySize);
  for (var i = 0; i < arraySize + 1; i++) {
    g[i] = new Array(arraySize);
    for (var j = 0; j < arraySize; j++) {
      g[i][j] = 0;
    }
  }
  g[x + 1][y] = count;
  count += increment;
  g[x][y] = count;
  count += increment;
  y++;
  g[x++][y] = count;
  count += increment;
  g[x][y] = count;

  var range;
  var current_level = 1;

  while (current_level < level + 1 && x > 0) {
    //while (current_level < 3 && x > 0) {
    range = current_level * 2;
    count += increment;

    // Start of new cycle - move up and right
    y--;
    x++;
    g[x][y] = count;

    // Run up the right edge
    //for (var i = 1; i < current_level * 2; i++) {
    for (var i = 1; i < current_level + 1; i++) {
      y--;
      count += increment;
      g[x][y] = count;
    };

    // Run left along the top
    for (var i = 0; i < range + 1; i++) {
      x--;
      count += increment;
      g[x][y] = count;
    };

    // Run down the left edge
    for (var i = 0; i < range + 1; i++) {
      y++;
      count += increment;
      g[x][y] = count;
    };

    // Run right along the bottom
    for (var i = 0; i < range + 1; i++) {
      x++;
      count += increment;
      g[x][y] = count;
    };

    // Run up the right edge,
    for (var i = 0; i < current_level; i++) {
      y--;
      count += increment;
      g[x][y] = count;
    }
    //x++;
    current_level++;
    //y--;
  }

  const args = [g];
  plotsquare.apply(this, args);
};

function is_sq9(g) {
  if (g.length % 2 === 1) {
    return false;
  } else {
    return true;
  }
}

function plotsquare(g) {
  var level = (g.length / 2) - 1;
  var title = document.gann.title.value;
  var startno = parseFloat(document.gann.startno.value);
  //var level = parseInt(document.gann.levels.value);
  var center = level;
  var increment = parseFloat(document.gann.increment.value);

  var count = -Infinity;
  for (var i = 0; i < g.length; i++) {
    var max_in_row = Math.max.apply(null, g[i]);
    if (max_in_row > count) {
      count = max_in_row;
    }
  }
  var x_range = y_range = level * 2 + 1;
  //alert('x_range: ' + x_range + '\ny_range: ' + y_range);
  var a = window.open("", 'Gann', "resizable,menubar,scrollbars,status,width=1024,height=768");
  var d = a.document;
  d.write('<link rel="stylesheet" href="layout.css"><center>\n');
  d.write('<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">\n')
  if (title === "") {
    if (is_sq9(g)) {
      d.write("<h2>Gann Square of 9; start=" + startno + ", max=" + count + ", increment=" + increment + "</h2>\n");
    } else {
      d.write("<h2>Gann Square of 4; start=" + startno + ", max=" + count + ", increment=" + increment + "</h2>\n");

    }
  } else {
    d.write("<h2>" + title + "</h2>\n");
  };

  d.write('<table border="1" cellpadding="0" cellspacing="0" style="border-collapse:collapse;"\n');
  //alert('center: ' + center);
  //alert(Math.abs(10-center) < 0.9)
  //for (var i = 0; i < x_range; i++) {
  for (var i = 0; i < g.length; i++) {

    d.write("<tr>\n");
    for (var j = 0; j < y_range; j++) {
      //alert(g[i].length);
      //for (var j=0; j < g[i].length; g++) {

      // ---------------------------------------------
      // Default background color is white
      // ---------------------------------------------
      var bgcolor = "#ffffff";
      var text = "#000000";

      // ---------------------------------------------
      // Cardinal Cross is marked in red (#ff0000)
      // ---------------------------------------------
      if (is_sq9(g)) {
        if (i == center || j == center) {
          bgcolor = "#ffb6c1";
          text = "#ffffff";
        }
      } else {
        if ((Math.abs(i - center) < 0.9) || (Math.abs(j - center) < 0.9)) {
          bgcolor = "#ffb6c1";
          text = "#ffffff";
        }
      }

      // ---------------------------------------------
      // Fixed Cross is marked in blue (#0000ff)
      // ---------------------------------------------
      if (i == j || j == x_range - i - 1) {
        bgcolor = "#add8e6";
        text = "#ffffff";
      }

      // ---------------------------------------------
      // 22.5-deg lines are marked in yellow (#ffff00)
      // ---------------------------------------------

      if (is_sq9(g)) {
        // 14 -> 59 -> 136 -> 245 -> 386
        if (j == ((level - i) / 2) + i) {
          bgcolor = "#ffff00";
          text = "#000000";
        }

        // 16 -> 63 -> 142 -> 253 -> 396
        if (j == (2 * level) - (((level - i) / 2) + i)) {
          bgcolor = "#ffff00";
          text = "#000000";
        }

        // 12 -> 55 -> 130 -> 237 -> 376
        if (j == (2 * i) - level) {
          bgcolor = "#ffff00";
          text = "#000000";
        }

        // 18 -> 67 -> 148 -> 261 -> 406
        if (j == i + (level - i) * 3) {
          bgcolor = "#ffff00";
          text = "#000000";
        }
      } else { // sq4...
        //if (abs(j-((level-i)/2+i)) == 0) {
        //  bgcolor = "#ffff00";
        //  text = "#000000";
        //}
        if ((j < level) && i < level && (i - level) * 2 == j) {
          bgcolor = "#ffff00";
          text = "#000000"
        }
      }


      // ---------------------------------------------
      // center "1" is white
      // ---------------------------------------------
      if (i == center && j == center) {
        bgcolor = "#ffffff";
        text = "#000000";
      }

      d.write('<td bgcolor="' + bgcolor + '" color="' + text + '"><font face=arial size=0><div class="content" id="' + nice_format(g[j][i]) + '"><center>' + nice_format(g[j][i]) + '</center></div></td>');
    }
    d.write("</tr>\n");
  }
  d.write("</table>\n</center>\n");
  d.close();
}