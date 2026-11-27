const questions = [
  { axis: 'energy', prompt: 'ในวันว่างที่ไม่มีนัด คุณมักจะ…', hint: 'ปล่อยให้พลังงานพาคุณไปทางไหน', left: 'หาเพื่อนคุยหรือออกไปเจอผู้คน', right: 'อยู่กับตัวเองเงียบ ๆ แล้วค่อยชาร์จแบต', axisLabel: 'พลังงานของคุณ' },
  { axis: 'energy', prompt: 'เมื่อเข้าไปในงานที่ไม่รู้จักใคร คุณจะ…', hint: 'ความรู้สึกแรกของคุณกับห้องใหม่ ๆ', left: 'เริ่มทักใครสักคนก่อน', right: 'สังเกตบรรยากาศก่อนค่อยเปิดบทสนทนา', axisLabel: 'พลังงานของคุณ' },
  { axis: 'energy', prompt: 'หลังจากสัปดาห์ที่ยุ่งมาก สิ่งที่เยียวยาคุณคือ…', hint: 'อะไรทำให้กลับมาเป็นตัวเอง', left: 'กิจกรรมสนุก ๆ กับคนที่ชอบ', right: 'เวลาส่วนตัวที่ไม่มีใครเรียกหา', axisLabel: 'พลังงานของคุณ' },
  { axis: 'energy', prompt: 'เวลามีไอเดียใหม่ ๆ คุณอยาก…', hint: 'ไอเดียมีไว้แบ่งปันแบบไหน', left: 'เล่าให้คนรอบตัวฟังทันที', right: 'เก็บไปคิดต่อในหัวก่อน', axisLabel: 'พลังงานของคุณ' },
  { axis: 'energy', prompt: 'ห้องในฝันของคุณควรมี…', hint: 'พื้นที่แบบไหนที่ทำให้ใจสบาย', left: 'มุมต้อนรับเพื่อน ๆ และเสียงหัวเราะ', right: 'มุมสงบที่เป็นโลกส่วนตัวของคุณ', axisLabel: 'พลังงานของคุณ' },
  { axis: 'energy', prompt: 'เวลาต้องตัดสินใจเรื่องใหญ่ คุณชอบ…', hint: 'คุณได้ยินเสียงตัวเองชัดที่สุดเมื่อไร', left: 'คุยออกเสียงกับคนที่ไว้ใจ', right: 'ใช้เวลาไตร่ตรองคนเดียว', axisLabel: 'พลังงานของคุณ' },
  { axis: 'sensing', prompt: 'เวลาฟังเรื่องเล่า คุณมักจำ…', hint: 'สายตาคุณจับรายละเอียดแบบไหน', left: 'เหตุการณ์และรายละเอียดที่เกิดขึ้นจริง', right: 'ความหมายหรือความเป็นไปได้ที่ซ่อนอยู่', axisLabel: 'วิธีรับข้อมูล' },
  { axis: 'sensing', prompt: 'ถ้าได้เริ่มโปรเจกต์ใหม่ คุณจะอยากเห็น…', hint: 'จุดเริ่มต้นที่ทำให้คุณอิน', left: 'ขั้นตอนชัด ๆ และสิ่งที่ต้องทำก่อน', right: 'ภาพใหญ่และจินตนาการว่ามันจะไปได้ไกลแค่ไหน', axisLabel: 'วิธีรับข้อมูล' },
  { axis: 'sensing', prompt: 'ของขวัญที่ทำให้คุณประทับใจคือ…', hint: 'อะไรทำให้ของชิ้นหนึ่งมีความหมาย', left: 'ของที่ใช้ได้จริงและพอดีกับชีวิต', right: 'ของที่มีเรื่องราวหรือความหมายพิเศษ', axisLabel: 'วิธีรับข้อมูล' },
  { axis: 'sensing', prompt: 'เมื่อเรียนรู้เรื่องยาก ๆ คุณชอบ…', hint: 'วิธีทำให้เรื่องซับซ้อนกลายเป็นเรื่องสนุก', left: 'ตัวอย่างจริงให้ลองทำตาม', right: 'การเชื่อมโยงไอเดียให้เห็นภาพรวม', axisLabel: 'วิธีรับข้อมูล' },
  { axis: 'sensing', prompt: 'เวลาเดินทาง คุณสนใจ…', hint: 'สายตาของนักสำรวจมองหาอะไร', left: 'ร้านเล็ก ๆ ผู้คน และรสชาติในพื้นที่', right: 'เรื่องราวของเมืองและเส้นทางที่ยังไม่เคยลอง', axisLabel: 'วิธีรับข้อมูล' },
  { axis: 'sensing', prompt: 'ประโยคที่ใกล้เคียงคุณที่สุดคือ…', hint: 'วิธีที่คุณมองโลกในทุกวัน', left: 'อยู่กับสิ่งที่จับต้องได้ตรงหน้า', right: 'ชอบปล่อยใจไปกับสิ่งที่อาจเกิดขึ้น', axisLabel: 'วิธีรับข้อมูล' },
  { axis: 'thinking', prompt: 'เมื่อเพื่อนมาปรึกษาเรื่องยาก ๆ คุณมักจะ…', hint: 'การช่วยเหลือในแบบที่เป็นคุณ', left: 'ช่วยแยกปัญหาแล้วคิดทางออก', right: 'ฟังความรู้สึกและอยู่ข้างเขาก่อน', axisLabel: 'วิธีตัดสินใจ' },
  { axis: 'thinking', prompt: 'ถ้าต้องเลือก คุณให้ความสำคัญกับ…', hint: 'เข็มทิศในการตัดสินใจของคุณ', left: 'เหตุผลและความยุติธรรมที่สม่ำเสมอ', right: 'ความรู้สึกของคนที่เกี่ยวข้อง', axisLabel: 'วิธีตัดสินใจ' },
  { axis: 'thinking', prompt: 'ในบทสนทนาที่เห็นต่าง คุณจะ…', hint: 'ความต่างไม่จำเป็นต้องเป็นกำแพง', left: 'ชวนคุยด้วยเหตุผลจนเห็นภาพชัด', right: 'หาจุดร่วมที่ทำให้ทุกคนสบายใจ', axisLabel: 'วิธีตัดสินใจ' },
  { axis: 'thinking', prompt: 'สิ่งที่คุณชื่นชมในคนอื่นมากที่สุดคือ…', hint: 'คุณมองเห็นคุณค่าแบบไหนก่อน', left: 'ความคิดคมและแก้ปัญหาเก่ง', right: 'ความเข้าใจคนและความอ่อนโยน', axisLabel: 'วิธีตัดสินใจ' },
  { axis: 'thinking', prompt: 'ถ้าแผนที่วางไว้เริ่มมีปัญหา คุณจะ…', hint: 'ตอนโลกไม่เป็นไปตามแผน', left: 'ประเมินข้อมูลแล้วปรับแผนใหม่', right: 'เช็กก่อนว่าคนในทีมโอเคกันไหม', axisLabel: 'วิธีตัดสินใจ' },
  { axis: 'thinking', prompt: 'คำชมที่ทำให้คุณยิ้มกว้างคือ…', hint: 'เสียงสะท้อนแบบไหนที่แตะใจคุณ', left: 'คุณคิดเป็นระบบและไว้ใจได้', right: 'คุณทำให้คนรอบตัวรู้สึกดีขึ้น', axisLabel: 'วิธีตัดสินใจ' },
  { axis: 'judging', prompt: 'ก่อนออกจากบ้านไปเที่ยว คุณมักจะ…', hint: 'ความสบายใจเริ่มต้นจากตรงไหน', left: 'เช็กแผนและเตรียมของเกือบครบ', right: 'ออกไปก่อนแล้วค่อยดูหน้างาน', axisLabel: 'จังหวะชีวิต' },
  { axis: 'judging', prompt: 'เดดไลน์ใกล้เข้ามาแล้ว คุณจะ…', hint: 'จังหวะการทำงานที่ปลุกพลังคุณ', left: 'ทำทีละนิดจนเสร็จก่อนเวลา', right: 'ไฟลนแล้วพุ่งสุด ๆ ในช่วงท้าย', axisLabel: 'จังหวะชีวิต' },
  { axis: 'judging', prompt: 'ปฏิทินในโทรศัพท์ของคุณน่าจะ…', hint: 'คุณจัดพื้นที่ให้สิ่งต่าง ๆ อย่างไร', left: 'มีสี มีช่อง และค่อนข้างเป็นระเบียบ', right: 'มีไว้ดูคร่าว ๆ ที่เหลือค่อยว่ากัน', axisLabel: 'จังหวะชีวิต' },
  { axis: 'judging', prompt: 'ถ้าแผนวันหยุดถูกเปลี่ยนกะทันหัน คุณจะ…', hint: 'แผนใหม่ทำให้ใจคุณเป็นอย่างไร', left: 'ขอเวลาตั้งหลักแล้วจัดแผนใหม่', right: 'โอเคเลย อาจได้เรื่องสนุกกว่าเดิม', axisLabel: 'จังหวะชีวิต' },
  { axis: 'judging', prompt: 'งานที่ค้างอยู่ในหัวทำให้คุณ…', hint: 'ความเรียบร้อยมีผลกับใจแค่ไหน', left: 'อยากจัดการให้จบเพื่อจะได้โล่ง', right: 'วางไว้ก่อนได้ เดี๋ยวค่อยกลับมา', axisLabel: 'จังหวะชีวิต' },
  { axis: 'judging', prompt: 'สิ่งที่ทำให้วันหนึ่งรู้สึกดีคือ…', hint: 'คุณชอบให้ชีวิตเคลื่อนที่อย่างไร', left: 'รู้ว่ามีอะไรเกิดขึ้นและพอควบคุมได้', right: 'มีพื้นที่ให้เปลี่ยนใจและค้นพบอะไรใหม่', axisLabel: 'จังหวะชีวิต' }
];

const axisInfo = {
  energy: { name: 'พลังงาน', left: ['E', 'เติมไฟจากผู้คน'], right: ['I', 'เติมไฟจากตัวเอง'] },
  sensing: { name: 'การรับข้อมูล', left: ['S', 'เห็นสิ่งที่เป็นจริง'], right: ['N', 'เห็นความเป็นไปได้'] },
  thinking: { name: 'การตัดสินใจ', left: ['T', 'ใช้เหตุผลนำทาง'], right: ['F', 'ใช้คุณค่านำทาง'] },
  judging: { name: 'จังหวะชีวิต', left: ['J', 'ชอบความชัดเจน'], right: ['P', 'ชอบความยืดหยุ่น'] }
};

const resultProfiles = {
  ISTJ: { name: 'ผู้วางรากฐาน', group: 'กลุ่มผู้พิทักษ์', symbol: '▦', tagline: 'คุณคือความสม่ำเสมอที่ทำให้สิ่งต่าง ๆ เดินหน้า', tags: ['ไว้ใจได้', 'ละเอียด', 'มั่นคง'], strengths: ['รับผิดชอบกับสิ่งที่รับปาก', 'เก็บรายละเอียดที่คนอื่นอาจมองข้าม', 'ทำเรื่องยากให้เป็นขั้นตอน'], vibe: 'มุมโปรดของคุณน่าจะมีแสงดี ๆ ตารางที่พอดี และของใช้ที่เลือกมาแล้วว่าใช่', vibes: ['โต๊ะเป็นระเบียบ', 'เพลงเบา ๆ', 'กาแฟแก้วเดิม'], description: 'คุณเป็นคนที่ค่อย ๆ สร้างความมั่นคงจากสิ่งเล็ก ๆ ไม่จำเป็นต้องพูดดัง แต่คนรอบตัวรู้ว่าพึ่งพาคุณได้ คุณมองเห็นคุณค่าของความตั้งใจและการทำให้ดีในแบบที่จับต้องได้', palette: ['#e88379', '#b8d9c4'] },
  ISFJ: { name: 'ผู้ดูแลแสงอุ่น', group: 'กลุ่มผู้พิทักษ์', symbol: '♡', tagline: 'คุณเก็บรายละเอียดของผู้คนไว้ในความใส่ใจ', tags: ['อบอุ่น', 'ใส่ใจ', 'อ่อนโยน'], strengths: ['จำสิ่งเล็ก ๆ ที่ทำให้คนอื่นรู้สึกดี', 'ดูแลสิ่งรอบตัวอย่างสม่ำเสมอ', 'สร้างพื้นที่ปลอดภัยให้คนที่รัก'], vibe: 'คุณน่าจะชอบพื้นที่นุ่ม ๆ ที่มีของคุ้นเคย กลิ่นหอม และคนสนิทไม่กี่คน', vibes: ['ผ้าห่มนุ่ม', 'ขนมโฮมเมด', 'แสงแดดบ่าย'], description: 'คุณมีหัวใจที่สังเกตเก่ง เห็นทั้งสิ่งที่คนพูดและสิ่งที่เขาไม่ได้พูด ความรักของคุณมักอยู่ในรูปการลงมือทำเงียบ ๆ และนั่นทำให้คนรอบตัวรู้สึกได้รับการโอบอุ้ม', palette: ['#ed9a8e', '#a9dfc4'] },
  ESTJ: { name: 'กัปตันผู้ลงมือทำ', group: 'กลุ่มผู้พิทักษ์', symbol: '✚', tagline: 'คุณเปลี่ยนความตั้งใจให้กลายเป็นเรื่องที่เกิดขึ้นจริง', tags: ['ชัดเจน', 'กล้าตัดสินใจ', 'ลงมือทำ'], strengths: ['จัดลำดับความสำคัญได้เก่ง', 'พาทีมไปข้างหน้าอย่างตรงไปตรงมา', 'รับมือสถานการณ์จริงได้ดี'], vibe: 'บรรยากาศที่ใช่คือพื้นที่มีเป้าหมายชัด เครื่องมือพร้อม และทีมที่คุยกันรู้เรื่อง', vibes: ['เช็กลิสต์', 'โต๊ะทำงานโปร่ง', 'แผนที่เส้นชัย'], description: 'คุณเป็นแรงขับที่ทำให้ไอเดียไม่หยุดอยู่บนกระดาษ คุณชอบความชัดเจนและพร้อมรับบทคนถือพวงมาลัยเมื่อจำเป็น ภายใต้ความเด็ดขาดนั้นมีความตั้งใจอยากให้ทุกอย่างไปได้ดี', palette: ['#e97669', '#f6cf83'] },
  ESFJ: { name: 'เจ้าบ้านใจดี', group: 'กลุ่มผู้พิทักษ์', symbol: '✿', tagline: 'คุณทำให้ทุกที่มีความรู้สึกเหมือนกลับบ้าน', tags: ['เป็นมิตร', 'ร่วมมือ', 'สร้างสีสัน'], strengths: ['เชื่อมคนให้เข้าหากัน', 'สังเกตความต้องการของกลุ่ม', 'ทำให้แผนการมีชีวิตชีวา'], vibe: 'คุณน่าจะชอบโต๊ะยาว ๆ ที่มีของอร่อย เสียงหัวเราะ และทุกคนได้มีส่วนร่วม', vibes: ['มื้อรวมแก๊ง', 'ดอกไม้สด', 'เพลย์ลิสต์โปรด'], description: 'คุณมีพรสวรรค์ในการทำให้คนรู้สึกเป็นส่วนหนึ่ง คุณมองเห็นความสุขที่เกิดจากการแบ่งปันและการร่วมมือ และมักเป็นคนที่ทำให้บรรยากาศธรรมดากลายเป็นความทรงจำ', palette: ['#ee8d75', '#f3c5db'] },
  INTJ: { name: 'นักวางหมากเงียบ', group: 'กลุ่มนักวิเคราะห์', symbol: '⌁', tagline: 'คุณเห็นเส้นทางไกล ก่อนใครจะเห็นแผนที่', tags: ['มองไกล', 'เป็นระบบ', 'อิสระทางความคิด'], strengths: ['มองภาพใหญ่และวางกลยุทธ์', 'เรียนรู้ด้วยตัวเองได้ลึก', 'ไม่หลงไปกับเสียงรบกวน'], vibe: 'พื้นที่ในฝันของคุณมีโต๊ะสำหรับคิด หนังสือที่เปิดค้าง และเวลาที่ไม่มีใครเร่ง', vibes: ['ห้องเงียบ', 'แผนผังไอเดีย', 'วิวไกล ๆ'], description: 'คุณชอบเข้าใจว่าทำไมสิ่งต่าง ๆ จึงเป็นอย่างที่มันเป็น ก่อนจะเลือกว่าจะทำอะไรต่อ คุณอาจดูนิ่ง แต่ข้างในมีโลกของความคิดที่กำลังต่อจิ๊กซอว์อนาคตอยู่เสมอ', palette: ['#7c6db4', '#afd8ed'] },
  INTP: { name: 'นักทดลองความคิด', group: 'กลุ่มนักวิเคราะห์', symbol: '◇', tagline: 'คุณสนุกกับการเปิดประตูที่คนอื่นยังไม่ทันสังเกต', tags: ['ช่างสงสัย', 'ยืดหยุ่น', 'คิดลึก'], strengths: ['ตั้งคำถามได้คมและน่าสนใจ', 'เชื่อมโยงเรื่องไกลตัวเข้าด้วยกัน', 'กล้าลองวิธีที่ไม่เหมือนเดิม'], vibe: 'คุณน่าจะชอบมุมที่มีอิสระให้คิดเล่น เล่นกับไอเดีย และเปลี่ยนทางได้ตลอด', vibes: ['สมุดสเก็ตช์', 'ของเล่นกลไก', 'เพลงอิเล็กทรอนิกส์'], description: 'คุณไม่ได้ต้องการคำตอบเร็วที่สุด แต่อยากได้คำตอบที่น่าสนใจและจริงพอ คุณมีความสุขกับการทดลองทางความคิด และมักเห็นมุมที่ทำให้บทสนทนาไปได้ไกลกว่าที่คาด', palette: ['#8a7dc4', '#f3c785'] },
  ENTJ: { name: 'นักขับเคลื่อนภาพใหญ่', group: 'กลุ่มนักวิเคราะห์', symbol: '↗', tagline: 'คุณมองเห็นปลายทางและกล้าชวนคนไปด้วยกัน', tags: ['วิสัยทัศน์', 'เด็ดขาด', 'เติบโต'], strengths: ['ตั้งเป้าหมายได้ชัด', 'ตัดสินใจเมื่อถึงเวลาสำคัญ', 'ทำให้ทรัพยากรเคลื่อนไปถูกที่'], vibe: 'พื้นที่ที่ใช่มีไวท์บอร์ดให้ขีดเขียน คนเก่ง ๆ และโจทย์ที่ท้าทายพอ', vibes: ['กระดานไอเดีย', 'วิวเมือง', 'เพลงปลุกพลัง'], description: 'คุณเห็นศักยภาพของสิ่งต่าง ๆ และอยากทำให้มันไปถึงจุดที่ดีขึ้น คุณมีพลังของการจัดทิศทางและชวนคนอื่นลงมือ ความท้าทายที่มีความหมายทำให้คุณตื่นตัว', palette: ['#7664b5', '#f18478'] },
  ENTP: { name: 'นักเขย่าไอเดีย', group: 'กลุ่มนักวิเคราะห์', symbol: '✦', tagline: 'คุณทำให้คำถามเดิม ๆ กลายเป็นประตูบานใหม่', tags: ['แพรวพราว', 'กล้าลอง', 'สนุกกับความต่าง'], strengths: ['คิดทางเลือกได้ไม่รู้จบ', 'ชวนคนมองมุมใหม่', 'รับมือความเปลี่ยนแปลงได้ดี'], vibe: 'คุณน่าจะชอบพื้นที่ที่บทสนทนาไหลลื่น ไอเดียถูกโยนไปมา และไม่มีใครบอกว่าห้ามฝัน', vibes: ['คาเฟ่คึกคัก', 'โพสต์อิทเต็มผนัง', 'ทริปฉับพลัน'], description: 'คุณมีพลังกับสิ่งที่ยังไม่เสร็จ เพราะมันหมายความว่ายังมีอะไรให้ค้นพบ คุณชอบตั้งคำถาม เขย่าความเคยชิน และทำให้คนรอบตัวเห็นความเป็นไปได้เพิ่มขึ้น', palette: ['#ee7c76', '#b9a9eb'] },
  INFJ: { name: 'นักถักทอความหมาย', group: 'กลุ่มนักการทูต', symbol: '☼', tagline: 'คุณมองเห็นหัวใจของเรื่องราวและความรู้สึกของผู้คน', tags: ['ลึกซึ้ง', 'มีวิสัยทัศน์', 'เข้าอกเข้าใจ'], strengths: ['ฟังสิ่งที่อยู่ระหว่างบรรทัด', 'เปลี่ยนความรู้สึกเป็นความหมาย', 'ยืนหยัดกับสิ่งที่เชื่อ'], vibe: 'บรรยากาศที่ใช่คือแสงอุ่น หนังสือดี ๆ และบทสนทนาที่ไม่ต้องรีบจบ', vibes: ['ฝนพรำ', 'สมุดบันทึก', 'แสงโคมไฟ'], description: 'คุณมองผู้คนและโลกด้วยสายตาที่ลึกกว่าผิวหน้า คุณมีภาพในใจว่าสิ่งต่าง ๆ อาจดีขึ้นได้อย่างไร และมักใช้ความเข้าใจเล็ก ๆ ของตัวเองช่วยประคองคนรอบข้าง', palette: ['#8e78bd', '#efb0a5'] },
  INFP: { name: 'นักฝันหัวใจชัด', group: 'กลุ่มนักการทูต', symbol: '☾', tagline: 'คุณรักษาความอ่อนโยนไว้ แม้โลกจะเร่งให้แข็งแรง', tags: ['มีจินตนาการ', 'จริงใจกับใจ', 'อ่อนโยน'], strengths: ['เห็นความงามในสิ่งธรรมดา', 'ซื่อสัตย์กับคุณค่าข้างใน', 'สร้างพื้นที่ให้ความเป็นไปได้'], vibe: 'คุณน่าจะชอบมุมเล็ก ๆ ที่มีเพลงเพราะ แสงนุ่ม และสิ่งที่เล่าเรื่องความเป็นคุณ', vibes: ['โปสการ์ด', 'ศิลปะ', 'ต้นไม้ริมหน้าต่าง'], description: 'คุณมีเข็มทิศอยู่ข้างในที่ชี้ไปหาสิ่งซึ่งมีความหมาย คุณอาจไม่ได้รีบบอกทุกอย่างให้โลกรู้ แต่ความรู้สึกและจินตนาการของคุณมีสีสันที่ลึกมาก', palette: ['#ae8ed1', '#f4b9b0'] },
  ENFJ: { name: 'ผู้นำที่เห็นหัวใจคน', group: 'กลุ่มนักการทูต', symbol: '☀', tagline: 'คุณเชื่อในคน และทำให้เขาเชื่อในตัวเอง', tags: ['สร้างแรงใจ', 'อบอุ่น', 'ชวนเติบโต'], strengths: ['อ่านพลังของกลุ่มได้ไว', 'สื่อสารให้คนอยากมีส่วนร่วม', 'ผลักดันศักยภาพของคนอื่น'], vibe: 'พื้นที่ของคุณมีเสียงคุยที่จริงใจ เป้าหมายร่วม และคนที่ได้เติบโตไปด้วยกัน', vibes: ['วงสนทนา', 'ดอกไม้สีสด', 'เพลงร้องตาม'], description: 'คุณมีความสุขเมื่อเห็นคนอื่นได้เป็นตัวเองในเวอร์ชันที่ดีขึ้น คุณสื่อสารด้วยพลังของความเข้าใจและรู้ว่าจะชวนแต่ละคนเข้ามามีส่วนร่วมอย่างไร', palette: ['#ef827e', '#e5b5e5'] },
  ENFP: { name: 'ผู้จุดประกายโลก', group: 'กลุ่มนักการทูต', symbol: '✧', tagline: 'คุณมองเห็นความเป็นไปได้ในคนและเรื่องราวรอบตัว', tags: ['สดใส', 'เป็นธรรมชาติ', 'เต็มไปด้วยไอเดีย'], strengths: ['ทำให้คนรู้สึกมีพลัง', 'เชื่อมโยงผู้คนกับโอกาสใหม่', 'รักษาความอยากรู้อยากเห็นไว้เสมอ'], vibe: 'คุณน่าจะชอบพื้นที่ที่เปลี่ยนไปได้ มีสี มีเสียงหัวเราะ และพร้อมออกผจญภัยเสมอ', vibes: ['ตลาดนัด', 'กล้องฟิล์ม', 'ทริปไม่วางแผน'], description: 'คุณมีความสามารถพิเศษในการทำให้เรื่องธรรมดามีประกาย คุณเรียนรู้ผ่านผู้คนและประสบการณ์ใหม่ ๆ และมักพกความหวังเล็ก ๆ ไปจุดไฟให้คนรอบตัว', palette: ['#f0807b', '#f3d183'] },
  ISTP: { name: 'นักแกะกลไก', group: 'กลุ่มนักสำรวจ', symbol: '⚙', tagline: 'คุณเรียนรู้โลกด้วยมือของตัวเองและความอยากลอง', tags: ['คล่องตัว', 'ช่างสังเกต', 'เอาตัวรอดเก่ง'], strengths: ['แก้ปัญหาเฉพาะหน้าได้ดี', 'เรียนรู้จากการลงมือ', 'รักษาความนิ่งในสถานการณ์จริง'], vibe: 'พื้นที่ที่ใช่มีเครื่องมือพร้อม ทางให้ลอง และอิสระที่จะทำสิ่งต่าง ๆ ในจังหวะของคุณ', vibes: ['เวิร์กช็อป', 'ถนนโล่ง', 'เพลงจังหวะดี'], description: 'คุณไม่จำเป็นต้องมีคู่มือครบทุกหน้าเพื่อเริ่ม คุณเก่งในการอ่านสถานการณ์ตรงหน้า ทดลอง และหาทางที่เวิร์กจริง ความนิ่งของคุณมักซ่อนความกล้าไว้', palette: ['#72a9b9', '#f0c67f'] },
  ISFP: { name: 'ศิลปินผู้รู้สึก', group: 'กลุ่มนักสำรวจ', symbol: '❋', tagline: 'คุณทำให้ชีวิตมีสีด้วยความรู้สึกที่ละเอียดอ่อน', tags: ['มีเซนส์', 'ยืดหยุ่น', 'สังเกตเก่ง'], strengths: ['รับรู้ความงามรอบตัว', 'อยู่กับปัจจุบันอย่างลึกซึ้ง', 'สร้างสรรค์โดยไม่ต้องประกาศ'], vibe: 'คุณน่าจะชอบแสงธรรมชาติ เพลงที่พอดี และพื้นที่ที่ให้คุณเลือกสีของวันเอง', vibes: ['แกลเลอรีเล็ก ๆ', 'ผ้าลินิน', 'ทะเลช่วงเย็น'], description: 'คุณสัมผัสโลกผ่านรายละเอียดที่หลายคนอาจเดินผ่าน คุณไม่จำเป็นต้องอธิบายทุกความรู้สึก เพราะมือและสายตาของคุณแปลงมันเป็นบรรยากาศได้', palette: ['#77b8a8', '#e9a4a7'] },
  ESTP: { name: 'นักเปิดเกม', group: 'กลุ่มนักสำรวจ', symbol: '➜', tagline: 'คุณรู้ว่าควรก้าวเมื่อไร และทำให้ช่วงเวลานั้นมีชีวิต', tags: ['กล้าได้กล้าเสีย', 'พลังสูง', 'อ่านเกมไว'], strengths: ['ตัดสินใจในจังหวะสำคัญ', 'ทำให้ทีมคึกคัก', 'เปลี่ยนโอกาสให้เป็นประสบการณ์'], vibe: 'บรรยากาศที่ใช่มีผู้คน แสงไฟ เพลงสนุก และช่องว่างให้คุณลองอะไรใหม่ ๆ', vibes: ['ไฟนีออน', 'สนามกิจกรรม', 'เสียงเชียร์'], description: 'คุณมีพลังกับของจริงตรงหน้าและจังหวะที่กำลังเกิดขึ้น คุณไม่กลัวการเริ่มก่อน และมักทำให้คนรอบข้างกล้าขยับตามไปด้วย', palette: ['#ec8370', '#6cb8cf'] },
  ESFP: { name: 'ผู้เติมสีให้วัน', group: 'กลุ่มนักสำรวจ', symbol: '✷', tagline: 'คุณทำให้ช่วงเวลาธรรมดาเปล่งประกายขึ้นมาได้', tags: ['ร่าเริง', 'เป็นกันเอง', 'ชวนสนุก'], strengths: ['สร้างความสุขได้ทันที', 'ทำให้คนรู้สึกเป็นตัวเอง', 'เห็นโอกาสสนุกในเรื่องเล็ก ๆ'], vibe: 'คุณน่าจะชอบที่ที่มีสีสัน ของอร่อย เพลงโปรด และคนที่หัวเราะไปพร้อมกัน', vibes: ['ปิกนิก', 'คอนเสิร์ต', 'ขนมสีสด'], description: 'คุณมีสายตาที่มองเห็นความน่ารักของชีวิตและไม่ลังเลที่จะชวนคนอื่นมาสนุกด้วยกัน คุณอยู่กับปัจจุบันเก่ง และทำให้ความทรงจำมีเสียงหัวเราะ', palette: ['#ef8d6e', '#f5d17e'] }
};

const state = { screen: 'home', index: 0, answers: Array(questions.length).fill(null), scores: { energy: 0, sensing: 0, thinking: 0, judging: 0 }, lastResult: null, advanceTimer: null };
const $ = (selector) => document.querySelector(selector);
const app = $('#app');

function showScreen(screen) {
  state.screen = screen;
  $('#home-screen').hidden = screen !== 'home';
  $('#quiz-screen').hidden = screen !== 'quiz';
  $('#result-screen').hidden = screen !== 'result';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function resetTheme() {
  app.style.setProperty('--page-tint', '#fff7ed');
  app.style.setProperty('--page-accent', '#f47e73');
  app.style.setProperty('--page-second', '#c9b8f3');
  document.querySelector('meta[name="theme-color"]').setAttribute('content', '#fff7ed');
}

function updateTheme() {
  const total = Object.values(state.scores).reduce((sum, score) => sum + score, 0);
  const answered = state.answers.filter((answer) => answer !== null).length;
  const energy = state.scores.energy / Math.max(1, Math.min(answered, 6) * 2);
  const thinking = state.scores.thinking / Math.max(1, Math.min(answered, 6) * 2);
  const palette = total > 2 ? ['#fff1df', '#ef806f', '#f4c36e'] : total < -2 ? ['#f3efff', '#897bc4', '#a9dcca'] : thinking > 2 ? ['#eef7f5', '#62a796', '#edbd84'] : ['#fff7ed', '#f47e73', '#c9b8f3'];
  app.style.setProperty('--page-tint', palette[0]);
  app.style.setProperty('--page-accent', palette[1]);
  app.style.setProperty('--page-second', palette[2]);
  document.querySelector('meta[name="theme-color"]').setAttribute('content', palette[0]);
}

function updateMood() {
  const answered = state.answers.filter((answer) => answer !== null).length;
  const total = Object.values(state.scores).reduce((sum, score) => sum + score, 0);
  const mood = $('#mood-title');
  const desc = $('#mood-description');
  const symbol = $('#mood-symbol');
  const chip = $('#axis-chip');
  if (answered === 0) {
    mood.textContent = 'ยังอ่านใจไม่ออก'; desc.textContent = 'ตอบไปเรื่อย ๆ แล้วฉากนี้จะค่อย ๆ เป็นของคุณมากขึ้น'; symbol.textContent = '✦'; chip.textContent = 'กำลังสำรวจทุกมุมของคุณ'; return;
  }
  if (total > 5) { mood.textContent = 'โทนอุ่นกำลังมา'; desc.textContent = 'คุณกำลังเติมแสงแดดและจังหวะที่มีชีวิตให้หน้านี้'; symbol.textContent = '☀'; chip.textContent = 'พลังที่เปิดออก'; }
  else if (total < -5) { mood.textContent = 'โหมดละมุนขึ้น'; desc.textContent = 'โลกใบนี้กำลังลดเสียงลง เพื่อให้ได้ยินเสียงข้างในชัดขึ้น'; symbol.textContent = '☾'; chip.textContent = 'พื้นที่ของตัวเอง'; }
  else if (state.scores.thinking > 4) { mood.textContent = 'เส้นสายเริ่มชัด'; desc.textContent = 'คำตอบของคุณกำลังเรียงตัวเป็นแพตเทิร์นที่น่าสนใจ'; symbol.textContent = '⌁'; chip.textContent = 'มองให้ลึกอีกนิด'; }
  else { mood.textContent = 'มีประกายบางอย่าง'; desc.textContent = 'ยังมีหลายเฉดของคุณให้ค้นพบต่อ'; symbol.textContent = '✧'; chip.textContent = 'ค่อย ๆ เป็นตัวเอง'; }
}

function renderQuestion() {
  const question = questions[state.index];
  const number = String(state.index + 1).padStart(2, '0');
  const percent = Math.round(((state.index + 1) / questions.length) * 100);
  $('#question-count').textContent = `คำถาม ${number} / ${questions.length}`;
  $('#progress-percent').textContent = `${percent}%`;
  $('#progress-bar').style.width = `${percent}%`;
  $('#question-number').textContent = number;
  $('#question-axis').textContent = question.axisLabel;
  $('#question-title').textContent = question.prompt.replace('คุณ', 'ฉัน').replace('…', '') + question.right;
  $('.question-hint').textContent = `${question.hint} · เลือก 1 ใน 5 ระดับ`;
  $('#selection-status').textContent = state.answers[state.index] === null ? 'ยังไม่ได้เลือกคำตอบ' : 'เลือกแล้ว · กำลังพาไปต่อ…';
  const backButton = document.querySelector('[data-action="back"]');
  backButton.disabled = state.index === 0;
  backButton.setAttribute('aria-disabled', String(state.index === 0));
  const labels = ['ไม่ใช่ฉันเลย', 'ไม่ค่อยใช่', 'กึ่งกลาง', 'ค่อนข้างใช่', 'ใช่ฉันมาก'];
  const scale = $('#answer-scale');
  scale.innerHTML = labels.map((label, index) => `<button type="button" class="answer-option ${state.answers[state.index] === index - 2 ? 'is-selected' : ''}" data-answer="${index - 2}" role="radio" aria-checked="${state.answers[state.index] === index - 2}"><span class="answer-dot" aria-hidden="true"></span><span>${label}</span></button>`).join('');
  updateMood();
}

function startQuiz() {
  window.clearTimeout(state.advanceTimer); state.index = 0; state.answers = Array(questions.length).fill(null); state.scores = { energy: 0, sensing: 0, thinking: 0, judging: 0 }; state.lastResult = null;
  resetTheme(); showScreen('quiz'); renderQuestion();
}

function setAnswer(value) {
  window.clearTimeout(state.advanceTimer);
  const numericValue = Number(value);
  const previous = state.answers[state.index];
  if (previous !== null) state.scores[questions[state.index].axis] -= previous;
  state.answers[state.index] = numericValue;
  state.scores[questions[state.index].axis] += numericValue;
  updateTheme(); updateMood(); renderQuestion();
  state.advanceTimer = window.setTimeout(() => {
    if (state.index < questions.length - 1) { state.index += 1; renderQuestion(); }
    else showResult();
  }, 340);
}

function goBackQuestion() {
  if (state.index === 0 || state.screen !== 'quiz') return;
  window.clearTimeout(state.advanceTimer);
  state.index -= 1;
  updateTheme();
  renderQuestion();
}

function getType() {
  return [
    state.scores.energy < 0 ? 'E' : 'I',
    state.scores.sensing < 0 ? 'S' : 'N',
    state.scores.thinking < 0 ? 'T' : 'F',
    state.scores.judging < 0 ? 'J' : 'P'
  ].join('');
}

function showResult() {
  const type = getType();
  const profile = resultProfiles[type];
  state.lastResult = type;
  app.style.setProperty('--page-tint', profile.palette[0] + '22');
  app.style.setProperty('--page-accent', profile.palette[0]);
  app.style.setProperty('--page-second', profile.palette[1]);
  showScreen('result');
  $('#result-type-code').textContent = type;
  $('#result-group').textContent = profile.group;
  $('#result-title').textContent = profile.name;
  $('#result-tagline').textContent = profile.tagline;
  $('#result-symbol').textContent = profile.symbol;
  $('#result-description').textContent = profile.description;
  $('#result-vibe').textContent = profile.vibe;
  $('#result-tags').innerHTML = profile.tags.map((tag) => `<span class="tag">${tag}</span>`).join('');
  $('#result-vibe-tags').innerHTML = profile.vibes.map((tag) => `<span class="tag">${tag}</span>`).join('');
  $('#result-strengths').innerHTML = profile.strengths.map((item) => `<li>${item}</li>`).join('');
  $('#axis-bars').innerHTML = Object.entries(axisInfo).map(([key, info]) => {
    const score = state.scores[key];
    const max = 12;
    const position = Math.max(4, Math.min(96, ((score + max) / (max * 2)) * 100));
    const letter = score < 0 ? info.left[0] : info.right[0];
    const label = score < 0 ? info.left[1] : info.right[1];
    return `<div class="axis-bar-card"><div class="axis-bar-top"><b>${info.name}</b><span>${letter} · ${label}</span></div><div class="axis-bar"><span class="axis-marker" style="left:${position}%"></span></div><div class="axis-names"><span>${info.left[0]}</span><span>${info.right[0]}</span></div></div>`;
  }).join('');
  window.setTimeout(() => { document.querySelectorAll('.result-card').forEach((card, index) => { card.style.animation = `appear .55s ${index * .08}s both`; }); }, 30);
}

function shareResult() {
  const type = state.lastResult || getType();
  const profile = resultProfiles[type];
  const text = `ฉันคือ ${type} — ${profile.name} จากใจฉัน ✦ ${profile.tagline}`;
  if (navigator.share) navigator.share({ title: 'ผลลัพธ์จากใจฉัน', text, url: window.location.href }).catch(() => {});
  else { navigator.clipboard?.writeText(`${text}\n${window.location.href}`); showToast('คัดลอกผลลัพธ์ไว้ให้แล้ว ✦'); }
}

function showToast(message) { const toast = $('#toast'); toast.textContent = message; toast.classList.add('show'); window.clearTimeout(showToast.timer); showToast.timer = window.setTimeout(() => toast.classList.remove('show'), 2600); }
function goHome() { resetTheme(); showScreen('home'); }

document.addEventListener('click', (event) => {
  const action = event.target.closest('[data-action]')?.dataset.action;
  if (action === 'start' || action === 'restart') startQuiz();
  if (action === 'home') goHome();
  if (action === 'share') shareResult();
  if (action === 'back') goBackQuestion();
  const answer = event.target.closest('[data-answer]')?.dataset.answer;
  if (answer !== undefined && state.screen === 'quiz') setAnswer(answer);
});

document.addEventListener('keydown', (event) => {
  if (state.screen === 'quiz' && ['1', '2', '3', '4', '5'].includes(event.key)) setAnswer(Number(event.key) - 3);
});

resetTheme();
