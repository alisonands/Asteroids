url = '/data'

dists = []
times = []

d3.json(url).then(function (response) {
  // console.log(response.fields[3])
  var data = response.data
  data.forEach(dist => dists.push(dist[4]))
  data.forEach(time => times.push(time[3]))

  // Sample data: asteroid positions and times
  const asteroidDistances = dists; // Sample distances (replace with actual data)
  const asteroidTimes = times;

  // Create traces
  const asteroidTrace = {
    x: asteroidTimes,
    y: asteroidDistances,
    mode: 'markers',
    marker: {
      color: 'lightblue',
      size: 3
    },
    name: 'Asteroids'
  };

  const earthTrace = {
    x: [new Date()],
    y: [0],
    mode: 'markers',
    marker: {
      color: 'red',
      size: 12
    },
    name: 'Earth'
  };

  const presentTrace = {
    x: [new Date(2024), new Date(2024)],
    y: [0, Math.max(...asteroidDistances)],
    mode: 'lines',
    line: {
      color: 'white',
      width: 1,
      dash: 'dot'
    },
    name: 'Present'
  };

  // Layout
  const layout = {
    title: 'Asteroid Close Approaches to Earth',
    xaxis: {
      title: 'Time',
      tickformat: '%Y',
      range: [
        new Date() - 365.25 * 30 * 24 * 60 * 60 * 1000,
        new Date() + 365.25 * 30 * 24 * 60 * 60 * 1000
      ],
      showgrid: false
    },
    yaxis: {
      title: 'Distance from Earth (AU)',
      showgrid: false
    },
    plot_bgcolor: 'black',
    paper_bgcolor: 'black',
    font: {
      color: 'white'
    }
  };

  // Create plotly data array
  const plot_data = [asteroidTrace, earthTrace, presentTrace];

  // Create the plot
  Plotly.newPlot('plot', plot_data, layout);

})

