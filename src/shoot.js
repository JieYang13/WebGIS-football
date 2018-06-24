function shoot(name){
    var scaleh = d3.scale.linear();
    var scalev = d3.scale.linear();
    var width = 575,
        height = 360;

    function fx(d) { return d.x; };
    function fy(d) { return d.y; };

    var rollup = d3.rollup()
        .x(function(d) { return fx(d); })
        .y(function(d) { return fy(d); });

//var svg;

    d3.xml("else/field.svg", function(xml) {
        var dom = document.getElementById(name);
        dom.innerHTML= "";
        // svgdom = document.body.appendChild(xml.documentElement);
        var ximdiv = xml.documentElement;
        ximdiv.style.width = dom.style.width;
        ximdiv.style.length = dom.style.length;
        svgdom = dom.append(ximdiv);

        var svg = d3.select("svg");
        var defs = d3.select("defs");

        scaleh.domain([0, width]);
        scaleh.range([0, 1268]);
        scalev.domain([0, height]);
        scalev.range([0, 808]);

        d3.json("data/Croatia1.json", function (json) {
            var node = svg.selectAll(".node")
                .data(json.NotGoal)
                .enter().append("g")
                .attr("class", "node")
                .style("pointer-events", "all")
                .append("circle")
                .attr("cx", function (d, i) {
                    return width*(1-d.x)
                })
                .attr("cy", function (d, i) {
                    return height*(1-d.y)
                })
                .attr("r", 12)
                .attr("filter", "url(#f3)")
                .style("fill", "white")
                .style("stroke", "blue")
                .style("stroke-width", "2")
                .on("mouseover", function (d) {

                    var xPosition = scaleh(50 + parseFloat(d3.select(this).attr("cx")))/2;
                    var yPosition = scalev(10 + parseFloat(d3.select(this).attr("cy")))/2;
                    //console.log(xPosition,yPosition);
                    //d3.select(this).style("fill", "LightGoldenRodYellow");

                    d3.select("#tooltip2")
                        .style("left", xPosition + "px")
                        .style("top", yPosition + "px")
                        .select("#name2")
                        .text(d.player_name);

                    d3.select("#tooltip2")
                        .select("#minute")
                        .text(d.minute);

                    d3.select("#tooltip2")
                        .select("#second")
                        .text(d.second);

                    d3.select("#tooltip2").classed("hidden", false);
                })
                .on("mouseout", function(d) {
                    d3.select("#tooltip2").classed("hidden", true);

                });

            var node0 = svg.selectAll(".node0")
                .data(json.Goal)
                .enter().append("g")
                .attr("class", "node0")
                .style("pointer-events", "all")
                .append("circle")
                .attr("cx", function (d, i) {
                    return width*d.x
                })
                .attr("cy", function (d, i) {
                    return height*d.y
                })
                .attr("r", 12)
                .attr("filter", "url(#f3)")
                .style("fill", "white")
                .style("stroke", "red")
                .style("stroke-width", "2")
                .on("mouseover", function (d) {

                    var xPosition = scaleh(50 + parseFloat(d3.select(this).attr("cx")))/2;
                    var yPosition = scalev(10 + parseFloat(d3.select(this).attr("cy")))/2;
                    //console.log(xPosition,yPosition);
                    //d3.select(this).style("fill", "LightGoldenRodYellow");

                    d3.select("#tooltip2")
                        .style("left", xPosition + "px")
                        .style("top", yPosition + "px")
                        .select("#name2")
                        .text(d.player_name);

                    d3.select("#tooltip2")
                        .select("#minute")
                        .text(d.minute);

                    d3.select("#tooltip2")
                        .select("#second")
                        .text(d.second);

                    d3.select("#tooltip2").classed("hidden", false);
                })
                .on("mouseout", function(d) {
                    d3.select("#tooltip2").classed("hidden", true);

                });
        });


        d3.json("data/Brazil.json", function (json) {

            var node1 = svg.selectAll(".node1")
                .data(json.NotGoal)
                .enter().append("g")
                .attr("class", "node1")
                .style("pointer-events", "all")
                .append("circle")
                .attr("cx", function (d, i) {
                    return width*d.x
                })
                .attr("cy", function (d, i) {
                    return height*d.y
                })
                .attr("r", 12)
                .attr("filter", "url(#f3)")
                .style("fill", "white")
                .style("stroke", "grey")
                .style("stroke-width", "2")
                .on("mouseover", function (d) {

                    var xPosition = scaleh(50 + parseFloat(d3.select(this).attr("cx")))/2;
                    var yPosition = scalev(10 + parseFloat(d3.select(this).attr("cy")))/2;
                    //console.log(xPosition,yPosition);
                    //d3.select(this).style("fill", "LightGoldenRodYellow");

                    d3.select("#tooltip2")
                        .style("left", xPosition + "px")
                        .style("top", yPosition + "px")
                        .select("#name2")
                        .text(d.player_name);

                    d3.select("#tooltip2")
                        .select("#minute")
                        .text(d.minute);

                    d3.select("#tooltip2")
                        .select("#second")
                        .text(d.second);

                    d3.select("#tooltip2").classed("hidden", false);
                })
                .on("mouseout", function(d) {
                    d3.select("#tooltip").classed("hidden", true);

                });

            var node2 = svg.selectAll(".node2")
                .data(json.Goal)
                .enter().append("g")
                .attr("class", "node2")
                .style("pointer-events", "all")
                .append("circle")
                .attr("cx", function (d, i) {
                    return width*d.x
                })
                .attr("cy", function (d, i) {
                    return height*d.y
                })
                .attr("r", 12)
                .attr("filter", "url(#f3)")
                .style("fill", "white")
                .style("stroke", "red")
                .style("stroke-width", "2")
                .on("mouseover", function (d) {

                    var xPosition = scaleh(50 + parseFloat(d3.select(this).attr("cx")))/2;
                    var yPosition = scalev(10 + parseFloat(d3.select(this).attr("cy")))/2;
                    //console.log(xPosition,yPosition);
                    //d3.select(this).style("fill", "LightGoldenRodYellow");

                    d3.select("#tooltip2")
                        .style("left", xPosition + "px")
                        .style("top", yPosition + "px")
                        .select("#name2")
                        .text(d.player_name);

                    d3.select("#tooltip2")
                        .select("#minute")
                        .text(d.minute);

                    d3.select("#tooltip2")
                        .select("#second")
                        .text(d.second);

                    d3.select("#tooltip2").classed("hidden", false);
                })
                .on("mouseout", function(d) {
                    d3.select("#tooltip").classed("hidden", true);

                });
        });
    });
}