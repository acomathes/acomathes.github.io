import {
  Box,
  Center,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  ScaleFade,
  useDisclosure,
} from "@chakra-ui/react";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
  leftMarginInPx?: number;
  name: string;
  description: string;
  confidence: "confident" | "learning" | "satisfactory";
}

const CollectionItem: React.FC<Props> = ({
  children,
  confidence,
  description,
  leftMarginInPx = 0,
  name,
}) => {
  const { isOpen: isScaleFadeOpen, onToggle: onScaleFadeToggle } =
    useDisclosure();
  const {
    isOpen: isPopoverOpen,
    onClose: onPopoverClose,
    onToggle: onPopoverToggle,
  } = useDisclosure();
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView && !isScaleFadeOpen) onScaleFadeToggle();
    else if (!isInView && isScaleFadeOpen) onScaleFadeToggle();
  }, [isInView, isScaleFadeOpen]);

  return (
    <Popover
      returnFocusOnClose={false}
      isOpen={isPopoverOpen}
      onClose={onPopoverClose}
      placement="top"
      colorScheme="blackAlpha"
      preventOverflow={false}
    >
      <PopoverTrigger>
        <Center
          cursor="help"
          onClick={onPopoverToggle}
          onMouseLeave={onPopoverClose}
          onMouseEnter={onPopoverToggle}
          zIndex={1}
        >
          <ScaleFade initialScale={0.5} in={isScaleFadeOpen} ref={ref}>
            <Box width="150px" marginLeft={`${leftMarginInPx}px`}>
              {children}
            </Box>
          </ScaleFade>
        </Center>
      </PopoverTrigger>
      <PopoverContent backgroundColor="black">
        <PopoverHeader fontWeight="semibold">
          {name} ({confidence})
        </PopoverHeader>
        <PopoverArrow />
        <PopoverBody>{description}</PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default CollectionItem;