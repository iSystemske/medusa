import { clx } from "@medusajs/ui"
import { Transition, motion } from "motion/react"

type LogoBoxProps = {
  className?: string
  checked?: boolean
  containerTransition?: Transition
  pathTransition?: Transition
}

export const LogoBox = ({
  className,
  checked,
  containerTransition = {
    duration: 0.8,
    delay: 0.5,
    ease: [0, 0.71, 0.2, 1.01],
  },
  pathTransition = {
    duration: 0.8,
    delay: 0.6,
    ease: [0.1, 0.8, 0.2, 1.01],
  },
}: LogoBoxProps) => {
  return (
    <div
      className={clx(
        "size-14 bg-ui-button-neutral shadow-buttons-neutral relative flex items-center justify-center rounded-xl",
        "after:button-neutral-gradient after:inset-0 after:content-['']",
        className
      )}
    >
      {checked && (
        <motion.div
          className="size-5 absolute -right-[5px] -top-1 flex items-center justify-center rounded-full border-[0.5px] border-[rgba(3,7,18,0.2)] bg-[#3B82F6] bg-gradient-to-b from-white/0 to-white/20 shadow-[0px_1px_2px_0px_rgba(3,7,18,0.12),0px_1px_2px_0px_rgba(255,255,255,0.10)_inset,0px_-1px_5px_0px_rgba(255,255,255,0.10)_inset,0px_0px_0px_0px_rgba(3,7,18,0.06)_inset]"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={containerTransition}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <motion.path
              d="M5.8335 10.4167L9.16683 13.75L14.1668 6.25"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={pathTransition}
            />
          </svg>
        </motion.div>
      )}
      <CustomLogoSvg className="w-9 h-9" />
    </div>
  )
}

function CustomLogoSvg(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 512 512"
      width={36}
      height={38}
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <polygon points="138.424,156 99.856,41.872 0,41.872 0,11.368 121.752,11.368 167.312,146.232 " />
      <polygon style={{ fill: "#FFD700" }} points="64.448,130.384 487.944,130.384 407.224,356.872 134.968,356.872 " />
      <circle cx="359.704" cy="441.904" r="58.728" />
      <circle cx="182.576" cy="441.904" r="58.728" />
      <path
        style={{ fill: "#800080" }}
        d="M470.44,319.832H219.552c-22.856,0-41.56-18.704-41.56-41.56v-68.576
  c0-22.856,18.704-41.56,41.56-41.56H470.44c22.856,0,41.56,18.704,41.56,41.56v68.576C512,301.128,493.296,319.832,470.44,319.832z"
      />
      <g>
        <path
          style={{ fill: "#FFFFFF" }}
          d="M227.216,261.472c4.344,2.224,11.04,4.456,17.936,4.456c7.432,0,11.368-3.088,11.368-7.76
    c0-4.456-3.4-7-12-10.088c-11.888-4.144-19.64-10.72-19.64-21.128c0-12.216,10.192-21.56,27.072-21.56
    c8.08,0,14.024,1.704,18.264,3.608l-3.608,13.056c-2.872-1.376-7.968-3.392-14.976-3.392c-7.008,0-10.4,3.192-10.4,6.896
    c0,4.576,4.04,6.584,13.272,10.088c12.64,4.672,18.584,11.256,18.584,21.344c0,12-9.232,22.2-28.888,22.2
    c-8.184,0-16.248-2.136-20.288-4.36L227.216,261.472z"
        />
        <path
          style={{ fill: "#FFFFFF" }}
          d="M300.992,211.344v14.864h11.576v11.904h-11.576v18.792c0,6.264,1.488,9.136,6.376,9.136
    c2.008,0,3.608-0.216,4.776-0.416l0.104,12.208c-2.12,0.848-5.944,1.384-10.504,1.384c-5.208,0-9.568-1.816-12.104-4.472
    c-2.984-3.072-4.472-8.064-4.472-15.392v-21.224h-6.896v-11.904h6.896v-11.256L300.992,211.344z"
        />
        <path
          style={{ fill: "#FFFFFF" }}
          d="M372.672,251.584c0,19-13.488,27.72-27.4,27.72c-15.192,0-26.864-9.984-26.864-26.76
    c0-16.768,11.04-27.504,27.72-27.504C362.056,225.04,372.672,235.976,372.672,251.584z M335.08,252.12
    c0,8.92,3.72,15.608,10.616,15.608c6.264,0,10.304-6.264,10.304-15.608c0-7.752-2.976-15.608-10.304-15.608
    C337.944,236.512,335.08,244.472,335.08,252.12z"
        />
        <path
          style={{ fill: "#FFFFFF" }}
          d="M382.64,243.304c0-7.648-0.216-12.64-0.432-17.096h13.92l0.52,9.568h0.432
    c2.656-7.544,9.016-10.736,14.008-10.736c1.488,0,2.232,0,3.4,0.216v15.184c-1.168-0.208-2.552-0.416-4.36-0.416
    c-5.944,0-9.984,3.192-11.04,8.184c-0.216,1.056-0.32,2.336-0.32,3.608v26.336H382.64V243.304z"
        />
        <path
          style={{ fill: "#FFFFFF" }}
          d="M434.552,257.328c0.536,6.68,7.112,9.872,14.656,9.872c5.512,0,9.976-0.752,14.328-2.12l2.12,10.936
    c-5.312,2.12-11.784,3.192-18.792,3.192c-17.632,0-27.72-10.2-27.72-26.448c0-13.16,8.184-27.72,26.232-27.72
    c16.768,0,23.144,13.072,23.144,25.912c0,2.76-0.32,5.208-0.536,6.376H434.552z M453.56,246.28c0-3.928-1.688-10.504-9.136-10.504
    c-6.792,0-9.552,6.152-9.976,10.504H453.56z"
        />
      </g>
      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#FFD700", stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: "#DAA520", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#B8860B", stopOpacity: 1 }} />
        </linearGradient>
      </defs>
    </svg>
  )
}
