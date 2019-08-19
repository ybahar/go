import React , {Component} from 'react'
export default class GameBoard extends Component {
   state = {dimension : 0 , gameBoard : []}
   ctx = null;
   boardSize = 19;
    componentDidMount(){
      let dimension = (window.innerWidth>window.innerHeight)? window.innerHeight - 50 : window.innerWidth - 50;
      this.ctx = this.refs.canvas.getContext('2d')
      console.log(dimension);      
      this.setState({dimension},this.initBoard);
   }
   initBoard = () => {
        let gameBoard = [];
        for(let i = 0 ; i < this.boardSize ; i++){
            gameBoard[i] = [];
        for(let j = 0 ; j < this.boardSize ; j++){
            gameBoard[i][j] = null;
        }
        }
        let rectSize = this.state.dimension / this.boardSize
        this.ctx.fillStyle = 'brown';
        this.ctx.strokeStyle = 'black';
        console.log(this.state)
        gameBoard.forEach((line,i) => line.forEach((pos,j) => {
            this.ctx.beginPath()
        //    this.ctx.rect(rectSize*i , rectSize*j,rectSize,rectSize);
           this.ctx.strokeRect(rectSize*i , rectSize*j,rectSize,rectSize);
           this.ctx.fillRect(rectSize*i , rectSize*j,rectSize,rectSize);
        //    this.ctx.stroke();
           this.ctx.closePath();

       }))

   }

    render(){
     return <canvas width={this.state.dimension + 'px'} height={this.state.dimension + 'px'} ref="canvas"></canvas>
   }

}