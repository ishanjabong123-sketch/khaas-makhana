import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Clock,
  Package,
  CheckCircle,
  Check,
  ChevronsUpDown,
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    countryCode: '+1',
    company: '',
    country: 'United States',
    productType: '',
    quantity: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [countryOpen, setCountryOpen] = useState(false);
  const { toast } = useToast();

  // Map product categories from ProductsSection to productType values
  const categoryToProductTypeMap: Record<string, string> = {
    'Export Premium': '>21 mm',
    'Retail Premium': '18–21 mm',
    Commercial: '15-18mm',
  };

  const productOptions = [
    { value: '>21 mm', label: '6+ or 7 Suta Handpicked ( > 21 mm )' },
    { value: '18–21 mm', label: '6 Suta Normal + Handpicked ( 18–21 mm )' },
    {
      value: '15-18mm',
      label: '3/3+ 4/4+ 5/5+ Suta Normal or Handpicked ( 15-18mm )',
    },
  ];

  const countries = [
    // North America
    { name: 'United States', code: '+1', flag: '🇺🇸' },
    { name: 'Canada', code: '+1', flag: '🇨🇦' },
    { name: 'Mexico', code: '+52', flag: '🇲🇽' },

    // Central America & Caribbean
    { name: 'Guatemala', code: '+502', flag: '🇬🇹' },
    { name: 'Honduras', code: '+504', flag: '🇭🇳' },
    { name: 'El Salvador', code: '+503', flag: '🇸🇻' },
    { name: 'Nicaragua', code: '+505', flag: '🇳🇮' },
    { name: 'Costa Rica', code: '+506', flag: '🇨🇷' },
    { name: 'Panama', code: '+507', flag: '🇵🇦' },
    { name: 'Belize', code: '+501', flag: '🇧🇿' },
    { name: 'Jamaica', code: '+1876', flag: '🇯🇲' },
    { name: 'Cuba', code: '+53', flag: '🇨🇺' },
    { name: 'Haiti', code: '+509', flag: '🇭🇹' },
    { name: 'Dominican Republic', code: '+1809', flag: '🇩🇴' },
    { name: 'Puerto Rico', code: '+1787', flag: '🇵🇷' },
    { name: 'Trinidad and Tobago', code: '+1868', flag: '🇹🇹' },
    { name: 'Bahamas', code: '+1242', flag: '🇧🇸' },
    { name: 'Barbados', code: '+1246', flag: '🇧🇧' },

    // South America
    { name: 'Brazil', code: '+55', flag: '🇧🇷' },
    { name: 'Argentina', code: '+54', flag: '🇦🇷' },
    { name: 'Chile', code: '+56', flag: '🇨🇱' },
    { name: 'Colombia', code: '+57', flag: '🇨🇴' },
    { name: 'Peru', code: '+51', flag: '🇵🇪' },
    { name: 'Venezuela', code: '+58', flag: '🇻🇪' },
    { name: 'Ecuador', code: '+593', flag: '🇪🇨' },
    { name: 'Bolivia', code: '+591', flag: '🇧🇴' },
    { name: 'Paraguay', code: '+595', flag: '🇵🇾' },
    { name: 'Uruguay', code: '+598', flag: '🇺🇾' },
    { name: 'Guyana', code: '+592', flag: '🇬🇾' },
    { name: 'Suriname', code: '+597', flag: '🇸🇷' },

    // Western Europe
    { name: 'United Kingdom', code: '+44', flag: '🇬🇧' },
    { name: 'Ireland', code: '+353', flag: '🇮🇪' },
    { name: 'France', code: '+33', flag: '🇫🇷' },
    { name: 'Germany', code: '+49', flag: '🇩🇪' },
    { name: 'Spain', code: '+34', flag: '🇪🇸' },
    { name: 'Portugal', code: '+351', flag: '🇵🇹' },
    { name: 'Italy', code: '+39', flag: '🇮🇹' },
    { name: 'Netherlands', code: '+31', flag: '🇳🇱' },
    { name: 'Belgium', code: '+32', flag: '🇧🇪' },
    { name: 'Switzerland', code: '+41', flag: '🇨🇭' },
    { name: 'Austria', code: '+43', flag: '🇦🇹' },
    { name: 'Luxembourg', code: '+352', flag: '🇱🇺' },
    { name: 'Monaco', code: '+377', flag: '🇲🇨' },

    // Nordic Countries
    { name: 'Sweden', code: '+46', flag: '🇸🇪' },
    { name: 'Norway', code: '+47', flag: '🇳🇴' },
    { name: 'Denmark', code: '+45', flag: '🇩🇰' },
    { name: 'Finland', code: '+358', flag: '🇫🇮' },
    { name: 'Iceland', code: '+354', flag: '🇮🇸' },

    // Eastern Europe
    { name: 'Poland', code: '+48', flag: '🇵🇱' },
    { name: 'Czech Republic', code: '+420', flag: '🇨🇿' },
    { name: 'Slovakia', code: '+421', flag: '🇸🇰' },
    { name: 'Hungary', code: '+36', flag: '🇭🇺' },
    { name: 'Romania', code: '+40', flag: '🇷🇴' },
    { name: 'Bulgaria', code: '+359', flag: '🇧🇬' },
    { name: 'Croatia', code: '+385', flag: '🇭🇷' },
    { name: 'Slovenia', code: '+386', flag: '🇸🇮' },
    { name: 'Serbia', code: '+381', flag: '🇷🇸' },
    { name: 'Bosnia and Herzegovina', code: '+387', flag: '🇧🇦' },
    { name: 'Montenegro', code: '+382', flag: '🇲🇪' },
    { name: 'North Macedonia', code: '+389', flag: '🇲🇰' },
    { name: 'Albania', code: '+355', flag: '🇦🇱' },
    { name: 'Kosovo', code: '+383', flag: '🇽🇰' },

    // Southern Europe
    { name: 'Greece', code: '+30', flag: '🇬🇷' },
    { name: 'Cyprus', code: '+357', flag: '🇨🇾' },
    { name: 'Malta', code: '+356', flag: '🇲🇹' },

    // Baltic States
    { name: 'Lithuania', code: '+370', flag: '🇱🇹' },
    { name: 'Latvia', code: '+371', flag: '🇱🇻' },
    { name: 'Estonia', code: '+372', flag: '🇪🇪' },

    // CIS & Russia
    { name: 'Russia', code: '+7', flag: '🇷🇺' },
    { name: 'Ukraine', code: '+380', flag: '🇺🇦' },
    { name: 'Belarus', code: '+375', flag: '🇧🇾' },
    { name: 'Moldova', code: '+373', flag: '🇲🇩' },
    { name: 'Kazakhstan', code: '+7', flag: '🇰🇿' },
    { name: 'Uzbekistan', code: '+998', flag: '🇺🇿' },
    { name: 'Turkmenistan', code: '+993', flag: '🇹🇲' },
    { name: 'Kyrgyzstan', code: '+996', flag: '🇰🇬' },
    { name: 'Tajikistan', code: '+992', flag: '🇹🇯' },
    { name: 'Armenia', code: '+374', flag: '🇦🇲' },
    { name: 'Azerbaijan', code: '+994', flag: '🇦🇿' },
    { name: 'Georgia', code: '+995', flag: '🇬🇪' },

    // Middle East
    { name: 'Turkey', code: '+90', flag: '🇹🇷' },
    { name: 'UAE', code: '+971', flag: '🇦🇪' },
    { name: 'Saudi Arabia', code: '+966', flag: '🇸🇦' },
    { name: 'Qatar', code: '+974', flag: '🇶🇦' },
    { name: 'Kuwait', code: '+965', flag: '🇰🇼' },
    { name: 'Bahrain', code: '+973', flag: '🇧🇭' },
    { name: 'Oman', code: '+968', flag: '🇴🇲' },
    { name: 'Israel', code: '+972', flag: '🇮🇱' },
    { name: 'Palestine', code: '+970', flag: '🇵🇸' },
    { name: 'Jordan', code: '+962', flag: '🇯🇴' },
    { name: 'Lebanon', code: '+961', flag: '🇱🇧' },
    { name: 'Syria', code: '+963', flag: '🇸🇾' },
    { name: 'Iraq', code: '+964', flag: '🇮🇶' },
    { name: 'Iran', code: '+98', flag: '🇮🇷' },
    { name: 'Yemen', code: '+967', flag: '🇾🇪' },

    // South Asia
    { name: 'India', code: '+91', flag: '🇮🇳' },
    { name: 'Pakistan', code: '+92', flag: '🇵🇰' },
    { name: 'Bangladesh', code: '+880', flag: '🇧🇩' },
    { name: 'Sri Lanka', code: '+94', flag: '🇱🇰' },
    { name: 'Nepal', code: '+977', flag: '🇳🇵' },
    { name: 'Bhutan', code: '+975', flag: '🇧🇹' },
    { name: 'Maldives', code: '+960', flag: '🇲🇻' },
    { name: 'Afghanistan', code: '+93', flag: '🇦🇫' },

    // Southeast Asia
    { name: 'Thailand', code: '+66', flag: '🇹🇭' },
    { name: 'Vietnam', code: '+84', flag: '🇻🇳' },
    { name: 'Singapore', code: '+65', flag: '🇸🇬' },
    { name: 'Malaysia', code: '+60', flag: '🇲🇾' },
    { name: 'Indonesia', code: '+62', flag: '🇮🇩' },
    { name: 'Philippines', code: '+63', flag: '🇵🇭' },
    { name: 'Myanmar', code: '+95', flag: '🇲🇲' },
    { name: 'Cambodia', code: '+855', flag: '🇰🇭' },
    { name: 'Laos', code: '+856', flag: '🇱🇦' },
    { name: 'Brunei', code: '+673', flag: '🇧🇳' },
    { name: 'Timor-Leste', code: '+670', flag: '🇹🇱' },

    // East Asia
    { name: 'China', code: '+86', flag: '🇨🇳' },
    { name: 'Japan', code: '+81', flag: '🇯🇵' },
    { name: 'South Korea', code: '+82', flag: '🇰🇷' },
    { name: 'North Korea', code: '+850', flag: '🇰🇵' },
    { name: 'Taiwan', code: '+886', flag: '🇹🇼' },
    { name: 'Hong Kong', code: '+852', flag: '🇭🇰' },
    { name: 'Macau', code: '+853', flag: '🇲🇴' },
    { name: 'Mongolia', code: '+976', flag: '🇲🇳' },

    // Oceania
    { name: 'Australia', code: '+61', flag: '🇦🇺' },
    { name: 'New Zealand', code: '+64', flag: '🇳🇿' },
    { name: 'Papua New Guinea', code: '+675', flag: '🇵🇬' },
    { name: 'Fiji', code: '+679', flag: '🇫🇯' },
    { name: 'Samoa', code: '+685', flag: '🇼🇸' },
    { name: 'Tonga', code: '+676', flag: '🇹🇴' },
    { name: 'Vanuatu', code: '+678', flag: '🇻🇺' },
    { name: 'Solomon Islands', code: '+677', flag: '🇸🇧' },

    // North Africa
    { name: 'Egypt', code: '+20', flag: '🇪🇬' },
    { name: 'Morocco', code: '+212', flag: '🇲🇦' },
    { name: 'Algeria', code: '+213', flag: '🇩🇿' },
    { name: 'Tunisia', code: '+216', flag: '🇹🇳' },
    { name: 'Libya', code: '+218', flag: '🇱🇾' },
    { name: 'Sudan', code: '+249', flag: '🇸🇩' },

    // Sub-Saharan Africa
    { name: 'South Africa', code: '+27', flag: '🇿🇦' },
    { name: 'Nigeria', code: '+234', flag: '🇳🇬' },
    { name: 'Kenya', code: '+254', flag: '🇰🇪' },
    { name: 'Ethiopia', code: '+251', flag: '🇪🇹' },
    { name: 'Ghana', code: '+233', flag: '🇬🇭' },
    { name: 'Tanzania', code: '+255', flag: '🇹🇿' },
    { name: 'Uganda', code: '+256', flag: '🇺🇬' },
    { name: 'Rwanda', code: '+250', flag: '🇷🇼' },
    { name: 'Senegal', code: '+221', flag: '🇸🇳' },
    { name: 'Ivory Coast', code: '+225', flag: '🇨🇮' },
    { name: 'Cameroon', code: '+237', flag: '🇨🇲' },
    { name: 'Zimbabwe', code: '+263', flag: '🇿🇼' },
    { name: 'Zambia', code: '+260', flag: '🇿🇲' },
    { name: 'Mozambique', code: '+258', flag: '🇲🇿' },
    { name: 'Botswana', code: '+267', flag: '🇧🇼' },
    { name: 'Namibia', code: '+264', flag: '🇳🇦' },
    { name: 'Angola', code: '+244', flag: '🇦🇴' },
    { name: 'Mauritius', code: '+230', flag: '🇲🇺' },
    { name: 'Seychelles', code: '+248', flag: '🇸🇨' },
    { name: 'Madagascar', code: '+261', flag: '🇲🇬' },
    { name: 'Mali', code: '+223', flag: '🇲🇱' },
    { name: 'Burkina Faso', code: '+226', flag: '🇧🇫' },
    { name: 'Niger', code: '+227', flag: '🇳🇪' },
    { name: 'Chad', code: '+235', flag: '🇹🇩' },
    { name: 'Benin', code: '+229', flag: '🇧🇯' },
    { name: 'Togo', code: '+228', flag: '🇹🇬' },
    { name: 'Sierra Leone', code: '+232', flag: '🇸🇱' },
    { name: 'Liberia', code: '+231', flag: '🇱🇷' },
    { name: 'Guinea', code: '+224', flag: '🇬🇳' },
    { name: 'Gambia', code: '+220', flag: '🇬🇲' },
    { name: 'Malawi', code: '+265', flag: '🇲🇼' },
    { name: 'DR Congo', code: '+243', flag: '🇨🇩' },
    { name: 'Republic of Congo', code: '+242', flag: '🇨🇬' },
    { name: 'Gabon', code: '+241', flag: '🇬🇦' },
    { name: 'Equatorial Guinea', code: '+240', flag: '🇬🇶' },
    { name: 'Burundi', code: '+257', flag: '🇧🇮' },
    { name: 'Somalia', code: '+252', flag: '🇸🇴' },
    { name: 'Djibouti', code: '+253', flag: '🇩🇯' },
    { name: 'Eritrea', code: '+291', flag: '🇪🇷' },
    { name: 'Mauritania', code: '+222', flag: '🇲🇷' },
    { name: 'Lesotho', code: '+266', flag: '🇱🇸' },
    { name: 'Eswatini', code: '+268', flag: '🇸🇿' },
  ];

  // Phone number length validation by country code
  const phoneNumberLengths = {
    // North America
    '+1': { min: 10, max: 10 },
    '+52': { min: 10, max: 10 },
    '+502': { min: 8, max: 8 },
    '+504': { min: 8, max: 8 },
    '+503': { min: 8, max: 8 },
    '+505': { min: 8, max: 8 },
    '+506': { min: 8, max: 8 },
    '+507': { min: 7, max: 7 },
    '+501': { min: 7, max: 7 },
    '+1876': { min: 7, max: 7 },
    '+53': { min: 8, max: 8 },
    '+509': { min: 8, max: 8 },
    '+1809': { min: 7, max: 7 },
    '+1787': { min: 7, max: 7 },
    '+1868': { min: 7, max: 7 },
    '+1242': { min: 7, max: 7 },
    '+1246': { min: 7, max: 7 },

    // South America
    '+55': { min: 10, max: 11 },
    '+54': { min: 10, max: 10 },
    '+56': { min: 9, max: 9 },
    '+57': { min: 10, max: 10 },
    '+51': { min: 9, max: 9 },
    '+58': { min: 10, max: 10 },
    '+593': { min: 9, max: 9 },
    '+591': { min: 8, max: 8 },
    '+595': { min: 9, max: 9 },
    '+598': { min: 8, max: 8 },
    '+592': { min: 7, max: 7 },
    '+597': { min: 7, max: 7 },

    // Western Europe
    '+44': { min: 10, max: 10 },
    '+353': { min: 9, max: 9 },
    '+33': { min: 9, max: 9 },
    '+49': { min: 10, max: 11 },
    '+34': { min: 9, max: 9 },
    '+351': { min: 9, max: 9 },
    '+39': { min: 9, max: 10 },
    '+31': { min: 9, max: 9 },
    '+32': { min: 9, max: 9 },
    '+41': { min: 9, max: 9 },
    '+43': { min: 10, max: 10 },
    '+352': { min: 8, max: 9 },
    '+377': { min: 8, max: 8 },

    // Nordic
    '+46': { min: 7, max: 10 },
    '+47': { min: 8, max: 8 },
    '+45': { min: 8, max: 8 },
    '+358': { min: 7, max: 10 },
    '+354': { min: 7, max: 7 },

    // Eastern Europe
    '+48': { min: 9, max: 9 },
    '+420': { min: 9, max: 9 },
    '+421': { min: 9, max: 9 },
    '+36': { min: 9, max: 9 },
    '+40': { min: 9, max: 9 },
    '+359': { min: 8, max: 9 },
    '+385': { min: 8, max: 9 },
    '+386': { min: 8, max: 8 },
    '+381': { min: 8, max: 9 },
    '+387': { min: 8, max: 8 },
    '+382': { min: 8, max: 9 },
    '+389': { min: 8, max: 8 },
    '+355': { min: 9, max: 9 },
    '+383': { min: 8, max: 8 },

    // Southern Europe
    '+30': { min: 10, max: 10 },
    '+357': { min: 8, max: 8 },
    '+356': { min: 8, max: 8 },

    // Baltics
    '+370': { min: 8, max: 8 },
    '+371': { min: 8, max: 8 },
    '+372': { min: 7, max: 8 },

    // CIS
    '+7': { min: 10, max: 10 },
    '+380': { min: 9, max: 9 },
    '+375': { min: 9, max: 9 },
    '+373': { min: 8, max: 8 },
    '+998': { min: 9, max: 9 },
    '+993': { min: 8, max: 8 },
    '+996': { min: 9, max: 9 },
    '+992': { min: 9, max: 9 },
    '+374': { min: 8, max: 8 },
    '+994': { min: 9, max: 9 },
    '+995': { min: 9, max: 9 },

    // Middle East
    '+90': { min: 10, max: 10 },
    '+971': { min: 9, max: 9 },
    '+966': { min: 9, max: 9 },
    '+974': { min: 8, max: 8 },
    '+965': { min: 8, max: 8 },
    '+973': { min: 8, max: 8 },
    '+968': { min: 8, max: 8 },
    '+972': { min: 9, max: 9 },
    '+970': { min: 9, max: 9 },
    '+962': { min: 8, max: 9 },
    '+961': { min: 7, max: 8 },
    '+963': { min: 9, max: 9 },
    '+964': { min: 10, max: 10 },
    '+98': { min: 10, max: 10 },
    '+967': { min: 9, max: 9 },

    // South Asia
    '+91': { min: 10, max: 10 },
    '+92': { min: 10, max: 10 },
    '+880': { min: 10, max: 10 },
    '+94': { min: 9, max: 9 },
    '+977': { min: 10, max: 10 },
    '+975': { min: 8, max: 8 },
    '+960': { min: 7, max: 7 },
    '+93': { min: 9, max: 9 },

    // Southeast Asia
    '+66': { min: 9, max: 9 },
    '+84': { min: 9, max: 10 },
    '+65': { min: 8, max: 8 },
    '+60': { min: 9, max: 10 },
    '+62': { min: 9, max: 12 },
    '+63': { min: 10, max: 10 },
    '+95': { min: 8, max: 11 },
    '+855': { min: 8, max: 9 },
    '+856': { min: 8, max: 8 },
    '+673': { min: 7, max: 7 },
    '+670': { min: 7, max: 7 },

    // East Asia
    '+86': { min: 11, max: 11 },
    '+81': { min: 10, max: 10 },
    '+82': { min: 9, max: 10 },
    '+850': { min: 8, max: 10 },
    '+886': { min: 9, max: 9 },
    '+852': { min: 8, max: 8 },
    '+853': { min: 8, max: 8 },
    '+976': { min: 8, max: 8 },

    // Oceania
    '+61': { min: 9, max: 9 },
    '+64': { min: 8, max: 10 },
    '+675': { min: 7, max: 7 },
    '+679': { min: 7, max: 7 },
    '+685': { min: 5, max: 7 },
    '+676': { min: 5, max: 7 },
    '+678': { min: 5, max: 7 },
    '+677': { min: 5, max: 7 },

    // North Africa
    '+20': { min: 10, max: 10 },
    '+212': { min: 9, max: 9 },
    '+213': { min: 9, max: 9 },
    '+216': { min: 8, max: 8 },
    '+218': { min: 9, max: 9 },
    '+249': { min: 9, max: 9 },

    // Sub-Saharan Africa
    '+27': { min: 9, max: 9 },
    '+234': { min: 10, max: 10 },
    '+254': { min: 9, max: 9 },
    '+251': { min: 9, max: 9 },
    '+233': { min: 9, max: 9 },
    '+255': { min: 9, max: 9 },
    '+256': { min: 9, max: 9 },
    '+250': { min: 9, max: 9 },
    '+221': { min: 9, max: 9 },
    '+225': { min: 8, max: 8 },
    '+237': { min: 9, max: 9 },
    '+263': { min: 9, max: 9 },
    '+260': { min: 9, max: 9 },
    '+258': { min: 9, max: 9 },
    '+267': { min: 7, max: 8 },
    '+264': { min: 8, max: 9 },
    '+244': { min: 9, max: 9 },
    '+230': { min: 7, max: 7 },
    '+248': { min: 7, max: 7 },
    '+261': { min: 9, max: 9 },
    '+223': { min: 8, max: 8 },
    '+226': { min: 8, max: 8 },
    '+227': { min: 8, max: 8 },
    '+235': { min: 8, max: 8 },
    '+229': { min: 8, max: 8 },
    '+228': { min: 8, max: 8 },
    '+232': { min: 8, max: 8 },
    '+231': { min: 7, max: 8 },
    '+224': { min: 8, max: 8 },
    '+220': { min: 7, max: 7 },
    '+265': { min: 7, max: 9 },
    '+243': { min: 9, max: 9 },
    '+242': { min: 9, max: 9 },
    '+241': { min: 8, max: 8 },
    '+240': { min: 9, max: 9 },
    '+257': { min: 8, max: 8 },
    '+252': { min: 7, max: 9 },
    '+253': { min: 8, max: 8 },
    '+291': { min: 7, max: 7 },
    '+222': { min: 8, max: 8 },
    '+266': { min: 8, max: 8 },
    '+268': { min: 8, max: 8 },
  };

  // Helper functions to get phone number length constraints
  const getPhoneMaxLength = (countryCode: string) => {
    return phoneNumberLengths[countryCode]?.max || 15;
  };

  const getPhoneMinLength = (countryCode: string) => {
    return phoneNumberLengths[countryCode]?.min || 7;
  };

  useEffect(() => {
    // Read URL parameter for product selection
    const urlParams = new URLSearchParams(window.location.search);
    const productParam = urlParams.get('product');
    if (productParam) {
      // Map category name to productType value
      const mappedProductType =
        categoryToProductTypeMap[productParam] || productParam;
      setFormData((prev) => ({ ...prev, productType: mappedProductType }));
    }

    // Only scroll to form if there's a product parameter or scroll flag
    const shouldScroll = productParam || urlParams.get('scroll') === 'form';
    if (shouldScroll) {
      setTimeout(() => {
        const formContainer = document.querySelector('#contact-form');
        if (formContainer) {
          formContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }

    const handleProductSelection = (event: CustomEvent) => {
      setFormData((prev) => ({ ...prev, productType: event.detail }));
    };

    window.addEventListener(
      'selectProduct',
      handleProductSelection as EventListener
    );
    return () => {
      window.removeEventListener(
        'selectProduct',
        handleProductSelection as EventListener
      );
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    // Check form validity
    if (!form.checkValidity()) {
      // Find the first invalid field and scroll to it
      const firstInvalid = form.querySelector(':invalid') as HTMLElement;
      if (firstInvalid) {
        firstInvalid.focus();
        firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }

      // Let browser show validation messages
      form.reportValidity();
      return;
    }

    setIsSubmitting(true);

    const formDataObj = new FormData(form);

    // Add phone number with country code
    formDataObj.set(
      'phoneWithCode',
      `${formData.countryCode}${formData.phone}`
    );

    try {
      await fetch('/', {
        method: 'POST',
        body: formDataObj,
      });

      toast({
        title: 'Quote Request Submitted!',
        description:
          "We'll contact you within 24 hours with pricing and availability.",
        duration: 5000,
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        countryCode: '+1',
        company: '',
        country: 'United States',
        productType: '',
        quantity: '',
        message: '',
      });
    } catch (err) {
      toast({
        title: 'Error',
        description: 'Something went wrong while sending your request.',
        duration: 5000,
      });
    }

    setIsSubmitting(false);
  };

  // General input change handler for all fields
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Special handling for phone number - strip non-numeric characters
    if (name === 'phone') {
      const cleanValue = value.replace(/[^0-9]/g, '');
      setFormData((prev) => ({ ...prev, [name]: cleanValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const selectedCountry = countries.find((c) => c.name === formData.country);

  const handleCountryChange = (countryName: string) => {
    const country = countries.find((c) => c.name === countryName);
    if (country) {
      setFormData((prev) => ({
        ...prev,
        country: countryName,
        countryCode: country.code,
      }));
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+91-87084-99295',
      description: 'Mon-Sat, 9AM-6PM IST',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'khaasmakhana@gmail.com',
      description: '24/7 Email Support',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Purnia, Bihar, India',
      description: 'Makhana Capital of the World',
    },
  ];

  const whatsappNumber = '+918708499295';
  const whatsappMessage =
    "Hi! I'm interested in bulk makhana export. Please share pricing and availability.";

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Get In Touch
          </Badge>
          <h2 className="text-4xl font-bold mb-6">
            Ready to
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {' '}
              Start Importing?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contact us for bulk pricing, product samples, and custom packaging
            solutions. Our export team is ready to serve international buyers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card id="contact-form" className="shadow-premium scroll-mt-24">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-6 w-6 text-accent" />
                Request Bulk Quote
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={handleSubmit}
                name="quote-request"
                method="POST"
                data-netlify="true"
                className="space-y-6"
              >
                {/* hidden input for Netlify */}
                <input type="hidden" name="form-name" value="quote-request" />

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      minLength={2}
                      placeholder="Your full name"
                      title="Please enter your full name (at least 2 characters)"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your@email.com"
                      title="Please enter a valid email address"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name *</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      minLength={2}
                      placeholder="Your company name"
                      title="Please enter your company name (at least 2 characters)"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country">Country *</Label>
                    <Popover open={countryOpen} onOpenChange={setCountryOpen}>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          role="combobox"
                          aria-expanded={countryOpen}
                          className="w-full justify-between h-10"
                        >
                          {selectedCountry ? (
                            <span className="flex items-center gap-2">
                              <span>{selectedCountry.flag}</span>
                              <span>{selectedCountry.name}</span>
                            </span>
                          ) : (
                            'Select your country'
                          )}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent
                        className="w-[var(--radix-popover-trigger-width)] p-0"
                        align="start"
                      >
                        <Command>
                          <CommandInput placeholder="Search country..." />
                          <CommandList>
                            <CommandEmpty>No country found.</CommandEmpty>
                            <CommandGroup>
                              {countries.map((country) => (
                                <CommandItem
                                  key={country.name}
                                  value={`${country.name} ${country.code}`}
                                  onSelect={() => {
                                    handleCountryChange(country.name);
                                    setCountryOpen(false);
                                  }}
                                >
                                  <Check
                                    className={cn(
                                      'mr-2 h-4 w-4',
                                      formData.country === country.name
                                        ? 'opacity-100'
                                        : 'opacity-0'
                                    )}
                                  />
                                  <span className="flex items-center gap-2 flex-1">
                                    <span>{country.flag}</span>
                                    <span>{country.name}</span>
                                    <span className="text-muted-foreground font-mono text-xs ml-auto">
                                      {country.code}
                                    </span>
                                  </span>
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>
                    <input
                      type="hidden"
                      name="country"
                      value={formData.country}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <div className="flex gap-2">
                    <div className="flex items-center px-3 border border-input rounded-md bg-muted/50">
                      <span className="text-sm font-mono flex items-center gap-1.5">
                        {selectedCountry?.flag && (
                          <span>{selectedCountry.flag}</span>
                        )}
                        <span>{formData.countryCode}</span>
                      </span>
                    </div>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="1234567890"
                      className="flex-1 font-mono"
                      maxLength={getPhoneMaxLength(formData.countryCode)}
                      minLength={getPhoneMinLength(formData.countryCode)}
                      title={`Phone number must be ${getPhoneMinLength(
                        formData.countryCode
                      )}-${getPhoneMaxLength(formData.countryCode)} digits`}
                    />
                  </div>
                  <input
                    type="hidden"
                    name="phoneWithCode"
                    value={`${formData.countryCode}${formData.phone}`}
                  />
                </div>

                <div className="space-y-3">
                  <Label>Product Type *</Label>
                  <div className="grid grid-cols-1 gap-3">
                    {productOptions.map((option) => (
                      <div
                        key={option.value}
                        className="flex items-center space-x-2"
                      >
                        <input
                          type="radio"
                          id={option.value}
                          name="productType"
                          value={option.value}
                          checked={formData.productType === option.value}
                          onChange={handleInputChange}
                          required
                          className="w-4 h-4 text-accent border-gray-300 focus:ring-accent focus:ring-2 accent-accent outline-none focus:outline-none focus-visible:outline-none focus:ring-0 focus:shadow-none"
                          style={{
                            boxShadow: 'none',
                            outline: 'none',
                          }}
                        />
                        <Label
                          htmlFor={option.value}
                          className="cursor-pointer"
                        >
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="quantity">Required Quantity *</Label>
                  <Input
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    required
                    minLength={2}
                    placeholder="e.g., 10 tons, 500 kg, etc."
                    title="Please specify the quantity you need"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Requirements</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Specific requirements, preferred grades, packaging needs, delivery timeline, etc."
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  className="btn-accent w-full"
                  disabled={isSubmitting}
                  size="lg"
                >
                  {isSubmitting ? (
                    <>Processing...</>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Submit Quote Request
                    </>
                  )}
                </Button>

                <div className="text-center pt-4">
                  <p className="text-sm text-muted-foreground">
                    We'll respond within 24 hours with pricing and availability
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="border-none shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">{info.title}</h4>
                        <p className="text-primary font-medium">{info.value}</p>
                        <p className="text-sm text-muted-foreground">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-6 text-center">
                <MessageCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">
                  Quick WhatsApp Inquiry
                </h4>
                <p className="text-muted-foreground mb-4">
                  Get instant response for urgent bulk orders and pricing
                  inquiries
                </p>
                <Button
                  className="bg-green-600 hover:bg-green-700 text-white"
                  onClick={() =>
                    window.open(
                      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                        whatsappMessage
                      )}`,
                      '_blank'
                    )
                  }
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Chat on WhatsApp
                </Button>
              </CardContent>
            </Card>

            {/* Business Hours & Features */}
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-accent" />
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <p className="text-sm text-muted-foreground">
                      Monday - Saturday: 9:00 AM - 6:00 PM (IST)
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  {/* <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Free product samples available</span>
                  </div> */}
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Custom packaging solutions</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Export documentation support</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Global shipping & logistics</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
