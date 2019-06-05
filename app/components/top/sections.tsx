/** @jsx jsx */

import React from "react"
import { jsx, css } from "@emotion/core"

import placeIcon from "./round-place.svg"
import directionsIcon from "./round-directions_run.svg"

import { media } from "../../utils/style"
import SectionHeader from "../atoms/SectionHeader"
import TextBlock from "../atoms/TextBlock"

import Sponsor from './sponsor'
import SponsorLink from '../SponsorLink'
import Printing from './printing'

import { Container } from 'sancho'

const section = css`
  padding: 32px 0 48px;
  background-color: white;
`

const withIcon = css`
  position: relative;
  padding-left: 30px;
  margin-top: 4px;
  img {
    position: absolute;
    left: 0;
    opacity: 0.3;
  }
`

const Sections = () => (
  <>
    <section css={section}>
      <SectionHeader text="ABOUT">技書博とは</SectionHeader>
      <TextBlock>
        <p>
          あなたが最も得意とする技術、最も世界中に広めたい技術を、『技術書』という形で共有しませんか？
          技書博は、ITエンジニアが知見を共有するために開催される、技術書オンリーイベントです。
        </p>
        <p>
          エンジニアは、学習や業務によって得た知識をコミュニティに還元しあうことによって、何倍もの知識を吸収できます。
          至高の知識を持った著名な方のみでなく、これまで技術書を書いたことない方も勇気を出して、初めての本を書いて頂きたいと私たちは考えます。
          エンジニアがもつ技術的な知見は多岐にわたり、その多くが共有されないまま個人の中に留まっています。
          たとえば、体験談や考察、開発効率をあげるテクニック、生存戦略や成長戦略の描き方など、あなたにしか書けないことを本にしてみませんか。
          誰もがカジュアルに知識を共有できる場所を提供することが私たちの目的です。
        </p>
        <dl css={css`
          margin-top: 24px;
          dt, dd {
            display:inline-block;
            zoom:1;
            vertical-align:top;
            width: 50%;
            padding: 12px 0;
            margin:0;
            border-top:1px solid #eee;
          }

          dt {
            width: 112px;
            color: #666660;
            text-align: right;
            padding-right: 24px;
          }

          dd {
            width: calc(100% - 112px);
          }
        `}>
          <dt>日時</dt>
          <dd>
            2019.07.27(Sat.) 11:00-17:00<br/>
            ※ サークル入場 10:00
          </dd>
          <dt>場所</dt>
          <dd>大田区産業プラザPiO</dd>
          <dt>Twitter</dt>
          <dd>
            公式アカウント: <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/gishohaku">@gishohaku</a><br/>
            ハッシュタグ: <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/hashtag/%E6%8A%80%E6%9B%B8%E5%8D%9A">#技書博</a>
          </dd>
        </dl>
      </TextBlock>
    </section>
    <section
      css={css(
        section,
        `
        background-color: #f7f8fa;
      `
      )}
    >
      <SectionHeader text="ACCESS">アクセス</SectionHeader>
      {/* <div
        css={css`
          height: 450px;
          margin-top: 32px;
        `}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3245.795037859675!2d139.72196261596417!3d35.55876384428474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601860f87f5da4e3%3A0x8a0493a2f4accfb0!2z5aSn55Sw5Yy655Sj5qWt44OX44Op44K2UGlP!5e0!3m2!1sja!2sjp!4v1552499465825"
          frameBorder="0"
          title="会場の地図"
          css={css`
            border: 0;
            height: 100%;
            width: 100%;
          `}
          allowFullScreen
        />
      </div> */}
      <TextBlock>
        <p
          css={css`
            font-size: 32px;
            font-weight: bold;
            text-align: center;
            @media ${media.small} {
              font-size: 24px;
            }
          `}
        >
          大田区産業プラザPiO
        </p>
        <div
          css={css`
            background-color: #fff;
            padding: 12px;
            border-radius: 4px;
            margin-top: 12px;
          `}
        >
          <p css={withIcon}>
            <img src={placeIcon} alt="住所" />
            東京都大田区南蒲田1丁目20-20
          </p>
          <p css={withIcon}>
            <img src={directionsIcon} alt="アクセス" />
            京浜急行「京急蒲田」駅より徒歩約3分
            <br />
            JR京浜東北線、東急池上・多摩川線「蒲田」駅より徒歩約13分
          </p>
        </div>
      </TextBlock>
    </section>
    <section
      css={css(
        section,
        `
        background-color: #f7f8fa;
      `
      )}
    >
      <SectionHeader text="SPONSOR">スポンサー</SectionHeader>
      <Container css={css`
        max-width: 740px;
      `}>
        <div css={css`
          margin-top: 36px;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          > div {
            width: 160px;
            @media ${media.small} {
              width: 150px;
            }
            text-align: center;
            margin: 0 10px;
          }
          a {
            text-decoration:none;
            color:#1d272d;
          }
        `}>
          <Sponsor name="募集中" role="トートバッグサポーター"/>
          <Sponsor name="募集中" role="パブリシティサポーター"/>
          <Sponsor name="募集中" role="セキュリティサポーター"/>
          <Sponsor name="募集中" role="オフィシャルサポーター"/>
          <Sponsor name="募集中" role="懇親会サポーター"/>
          <Sponsor name="株式会社メディアドゥ" role="デザイン協力" image="/static/sponsors/mediado.png" href="https://mediado.jp/" />
        </div>
        <SponsorLink css={css`
          margin-top: 24px;
          background-color: white;
        `} />
      </Container>
    </section>
    <section css={section}>
      <SectionHeader text="PRINTING">バックアップ印刷所</SectionHeader>
      <Container css={css`
        max-width: 760px;
        margin-top: 36px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      `}>
        <Printing name='ねこのしっぽ' url='https://www.shippo.co.jp/' image='https://www.shippo.co.jp/neko/img/neko_banner.gif'/>
        <Printing name='日光企画' url='http://www.nikko-pc.com' image='http://www.nikko-pc.com/start/logo.gif'/>
        <Printing name='ポプルス' url='http://www.inv.co.jp/~popls' image='http://www.inv.co.jp/~popls/sozai/poplsbn2.gif'/>
        <Printing name='ケーナイン' url='https://www.k-k9.jp/' image='https://www.k-k9.jp/wp-content/themes/k9_20160801/img/logo.gif'/>
        <Printing name='栄光' url='https://www.eikou.com/'/>
      </Container>
    </section>
  </>
)

export default Sections
