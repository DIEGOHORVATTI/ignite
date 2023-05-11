type Props = {
  author: string
  day: string
}

export const Post = ({ author, day }: Props) => {
  return (
    <h3>
      Dev {author}, começou o ignate dia {day}
    </h3>
  )
}
