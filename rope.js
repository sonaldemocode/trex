class rope {


        constructor(body1,body2,offsetX,offsetY){
                this.offsetX = offsetX;
                this.offsetY = offsetY;

                var options = {

                    bodyA:body1,
                    bodyB:body2,
                    pointB:{ x:this.offsetX, y:this.offsetY}  



                }

                this.rope = Constraint.create(options);
                World.add(world, this.rope);




        }



        display(){



                var pointA = this.rope.bodyA.position;
                var pointB = this.rope.bodyB.position;

                //strokeWeight(2);
                //fill("white");

                var A1X = pointA.x;
                var A1Y = pointA.y;
                var a2X, a2Y;
                a2X = this.rope.bodyB.position.x + this.offsetX;
                a2Y = this.rope.bodyB.position.y  + this.offsetY;
                  

                push();
                strokeWeight(4);
                fill("red");

                line(A1X, A1Y, a2X, a2Y);
                pop();
                






        }

    }










