<template>
  <div class="index">
    <div class="index-header">
      <div class="info">
        <h1>Jetair-UI</h1>
        <p>联航风格的移动端UI库</p>
      </div>
    </div>
    <div class="index-components">
      <ol
        v-for="_nav in nav"
        :key="_nav"
      >
        <li>{{ _nav.name }}</li>
        <ul>
          <template v-for="_package in _nav.packages">
            <li
              v-if="_package.show"
              :key="_package.name"
            >
              <router-link :to="_package.name.toLowerCase()">
                {{ _package.name }}&nbsp;&nbsp;{{ _package.cName }}
              </router-link>
            </li>
          </template>
        </ul>
      </ol>
    </div>
  </div>
</template>

<script>
import { nav, versions } from '@/config.json';

export default {
  name: 'doc',
  data() {
    return {
      nav,
      versions
    };
  }
};
</script>
<style lang="scss" scoped>
.index {
  height: 100%;
  width: 100%;
  padding-top: 30px;

  &-header {
    display: flex;
    align-items: center;
    padding: 0 0.906667rem /* 68/75 */;
    height: 3.12rem /* 234/75 */;
    .info {
      display: flex;
      flex-direction: column;
      h1 {
        height: 1.28rem /* 96/75 */;
        line-height: 1.28rem;
        font-size: 0.906667rem /* 68/75 */;
        color: rgba(51, 51, 51, 1);
      }
      p {
        height: 0.24rem;
        line-height: 0.24rem /* 18/75 */;
        font-size: 0.32rem /* 24/75 */;
        color: rgba(154, 155, 157, 1);
      }
    }
  }
  &-components {
    background: #f7f8fa;
    border-radius: 0.4rem /* 30/75 */ 0.4rem /* 30/75 */ 0 0;
    overflow: hidden;
    padding: 0.4rem /* 30/75 */ 0.333333rem /* 25/75 */;
    > ol {
      margin-bottom: 0.453333rem /* 34/75 */;
      > li {
        line-height: 0.533333rem /* 40/75 */;
        font-size: 0.373333rem /* 28/75 */;
        color: rgba(144, 156, 164, 1);
        margin-bottom: 0.133333rem /* 10/75 */;
      }
      > ul {
        li {
          display: flex;
          align-items: center;
          padding: 0 24px;
          width: 100%;
          height: 45px;
          line-height: 45px;
          background: rgba(255, 255, 255, 1);
          border-radius: 22px;
          box-shadow: 0px 1px 4px 0px rgba(102, 102, 102, 0.06);
          margin-bottom: 13px;
          a {
            width: 100%;
            height: 100%;
            font-size: 15px;
            font-weight: bold;
            display: block;
            color: rgba(51, 51, 51, 1);
          }
        }
      }
    }
  }
}
</style>
