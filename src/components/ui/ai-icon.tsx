import Image from 'next/image'

function AIIcon() {
	return (
		<div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
			<div className="w-[25px]">
				<Image src="./sparkles.svg" alt="" className="w-full h-full" />
			</div>
		</div>
	)
}

export default AIIcon
