<script type="text/jsx">
    export default{
        name: 'skeleton',
        render() {
            return(
                <div class="body">
                    <div class="card">
                        <div class="image">
                            <img src="https://assets.codepen.io/2002878/wake-up-and-code.jpg" alt=""/>
                        </div>
                        <div class="content">
                            <h4>CodingStartup</h4>
                            <div class="description">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex quasi enim facere commodi omnis...
                            </div>
                        </div>
                    </div>
                    <div class="card loading">
                        <div class="image">
                            
                        </div>
                        <div class="content">
                            <h4></h4>
                            <div class="description">
                            
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
</script>

<style lang="less" scoped>
:root {
  --loading-grey: #ededed;
}
.body {
  background-color: #f6f6f6;
  font-family: Helvetica;
  font-size: 15px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-height: 100%;
}
.card {
  width: 320px;
  background-color: #fff;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, .12);
}

.image {
  height: 200px;
}

.image img {
  display: block;
  width: 100%;
  height: inherit;
  object-fit: cover;
}

.content {
  padding: 20px 18px
}

h4 {
  margin: 0 0 10px;
  font-size: 15px;
  line-height: 15px;
}

.description {
  font-size: 10px;
  line-height: 14px;
}

.loading .image,
.loading h4,
.loading .description{
    background-color: #ededed;
    background: linear-gradient(
        100deg,
        rgba(255, 255, 255, 0) 40%,
        rgba(255, 255, 255, 0.5) 50%,
        rgba(255, 255, 255, 0) 0%,
    ) #ededed;
    background-size: 200% 100%;
    background-position-x: 180%;
    animation: 1s loading ease-in-out infinite;
}
@keyframes loading {
    to{
        background-position-x: -20%;
    }
}
.loading h4{
    min-height: 16px;
    border-radius: 4px;
}
.loading .description{
    min-height: 40px;
    border-radius: 4px;
}
</style>