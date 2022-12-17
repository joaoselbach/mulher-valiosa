import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'
import { CarousselCard } from './CarousselCard'
import { Container } from './styles'
import { Box } from '@chakra-ui/react'

SwiperCore.use([Navigation, Pagination, Autoplay])

const Caroussel = () => {
  return (
    <Container>
      <Box
        display="flex"
        justifyContent="center"
        w={['100%', '60%']}
        margin="0 auto"
      >
        <Swiper
          navigation={true}
          spaceBetween={20}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={swiper => console.log(swiper)}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          <SwiperSlide>
            <CarousselCard
              name="Paloma"
              city="Belo Horizonte/MG"
              src="/images/paloma.jpg"
            >
              Durante 1 mês e meio nos conhecemos pelo aplicativo e as coisas
              fluíram TÃO leves! Não me senti insegura em nenhum momento, desde
              o início me posicionei e tive a certeza que se não fosse ele,
              seria o próximo. Ele disse pra mim que não conseguia imaginar o
              que poderia acontecer se eu conhecesse outro cara, e queria que eu
              estivesse com ele. Obrigada por me ensinar a amadurecer tanto!
            </CarousselCard>
          </SwiperSlide>
          <SwiperSlide>
            <CarousselCard
              name="Priscila"
              city="ES"
              src="/images/priscila1.jpg"
            >
              Desde o primeiro encontro fui eu mesma, como você me ensinou, e
              ele disse que isso que encantou ele. Agora estou noiva e quero
              agradecer de novo pelo seu trabalho. Com sua ajuda investi no meu
              relacionamento comigo mesma, aprendi a amar a mulher que me
              tornei, e assim eu recebi ainda mais amor!
            </CarousselCard>
          </SwiperSlide>
          <SwiperSlide>
            <CarousselCard
              name="Priscila"
              city="Juiz de Fora/MG"
              src="/images/priscila2.jpg"
            >
              Eu me tornei um mulher muito mais madura, consegui ter uma
              conversa com ele dizendo o que eu sentia e queria com ele dali pra
              frente, ele quis namorar comigo e estamos juntos. Sem que eu
              precisasse insistir, ele me ouviu e concordou que era a hora de
              dar esse passo, estou muito feliz!”
            </CarousselCard>
          </SwiperSlide>
          <SwiperSlide>
            <CarousselCard
              name="Vanessa"
              city="Juiz de Fora/MG"
              src="/images/vanessa.jpg"
            >
              Depois de tudo o que passei, luto, sofrimento e perdas, colocar os
              princípios aprendidos fez com que eu me fortalecesse e encontrasse
              um homem compatível comigo, que respeita minha história e está ao
              meu lado pra tudo!
            </CarousselCard>
          </SwiperSlide>
          <SwiperSlide>
            <CarousselCard
              name="Flávia"
              city="SC"
              src="/images/flavia.jpg"
            >
              Fui pedida em namoro depois de 3 semanas. Foi bem diferente do
              anterior que eu tinha conhecido, os encontramos no Tinder. Desde o
              início ele mostrou que queria algo sério, desde que estamos
              namorando até pra minha filha apresentei, ele é muito atencioso
              com ela. Agora entendo quando você diz que se um homem te quer na
              vida dele ele te coloca lá.
            </CarousselCard>
          </SwiperSlide>

          <SwiperSlide>
            <CarousselCard name="Laura" city="São Paulo/SP" src="/images/laura.jpg">
              Nunca tinha tido um relacionamento sério antes, aprender e
              praticar tudo - desde conhecer um homem até namorar e morar junto
              - o que sei agora fez total diferença pra ser quem sou hoje, ter a
              vida que tenho hoje. Nos casamos com 2 anos de namoro, somos muito
              felizes e temos um filho lindo!”
            </CarousselCard>
          </SwiperSlide>
          <SwiperSlide>
            <CarousselCard
              name="Rebeca"
              city="Sâo Lourenço/MG"
              src="/images/rebeca.jpeg"
            >
              Minha autoaceitação foi fundamental pra eu conseguir o
              relacionamento que eu tenho hoje. Fisicamente eu tinha dificuldade
              de aceitar minha imagem, eu não conseguia me colocar e tinha muito
              medo de perder, tinha medo de aparecer outra mulher melhor mais
              bonita. No curso aprendi a me posicionar e estamos juntos
              construindo uma história muito diferente das que eu tinha antes.
            </CarousselCard>
          </SwiperSlide>
          <SwiperSlide>
            <CarousselCard
              name="Camile"
              city="Ribeirão Preto/SP"
              src="/images/camile.jpg"
            >
              Quem iria imaginar tamanha reviravolta na minha vida” Estou tão
              feliz, com uma pessoa que me ama e me valoriza
            </CarousselCard>
          </SwiperSlide>
        </Swiper>
      </Box>
    </Container>
  )
}

export default Caroussel
